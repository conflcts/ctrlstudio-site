#!/usr/bin/env node
/**
 * Figma Export Script
 * Fetches design data from Figma API and outputs JSON for code generation.
 * Run: node scripts/figma-export.mjs
 * Requires FIGMA_ACCESS_TOKEN in .env
 */
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Load .env
if (existsSync(join(rootDir, '.env'))) {
  readFileSync(join(rootDir, '.env'), 'utf8').split('\n').forEach((line) => {
    const eq = line.indexOf('=');
    if (eq > 0) {
      const key = line.slice(0, eq).trim();
      let val = line.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  });
}

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = 'xvScDB6RRsVjZTVZgGaNlq';
const NODE_IDS = '3-38';

async function fetchFigma() {
  if (!FIGMA_TOKEN) {
    console.error('Error: FIGMA_ACCESS_TOKEN not found. Add it to .env');
    process.exit(1);
  }

  const headers = { 'X-Figma-Token': FIGMA_TOKEN };

  try {
    console.log('Fetching Figma file...');
    const fileRes = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, { headers });
    if (!fileRes.ok) {
      throw new Error(`File fetch failed: ${fileRes.status} ${await fileRes.text()}`);
    }
    const fileData = await fileRes.json();

    console.log('Fetching nodes...');
    const nodeRes = await fetch(
      `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(NODE_IDS)}`,
      { headers }
    );
    if (!nodeRes.ok) {
      throw new Error(`Node fetch failed: ${nodeRes.status} ${await nodeRes.text()}`);
    }
    const nodeData = await nodeRes.json();

    // Fetch images if any
    const imageRefs = collectImageRefs(nodeData);
    let images = {};
    if (imageRefs.length > 0) {
      console.log(`Fetching ${imageRefs.length} image URLs...`);
      const imgRes = await fetch(
        `https://api.figma.com/v1/images/${FILE_KEY}?ids=${imageRefs.join(',')}&format=svg`,
        { headers }
      );
      if (imgRes.ok) {
        const imgData = await imgRes.json();
        images = imgData.images || {};
      }
    }

    const output = {
      document: fileData.document,
      nodes: nodeData.nodes,
      images,
      styles: fileData.styles || {},
    };

    const outDir = join(rootDir, 'scripts', 'output');
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'figma-export.json'), JSON.stringify(output, null, 2));
    console.log('Saved to scripts/output/figma-export.json');

    // Also write a simplified structure for easier parsing
    const simplified = extractDesignTokens(output);
    writeFileSync(join(outDir, 'figma-tokens.json'), JSON.stringify(simplified, null, 2));
    console.log('Saved to scripts/output/figma-tokens.json');

    return output;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

function collectImageRefs(data, refs = []) {
  if (!data) return refs;
  if (data.fillReferences) refs.push(...data.fillReferences);
  if (data.children) {
    data.children.forEach((c) => collectImageRefs(c, refs));
  }
  if (data.nodes) {
    Object.values(data.nodes).forEach((n) => collectImageRefs(n.document, refs));
  }
  return [...new Set(refs)];
}

function extractDesignTokens(output) {
  const tokens = { colors: [], typography: [], spacing: [] };
  const seen = new Set();

  function walk(node, depth = 0) {
    if (!node || depth > 20) return;
    if (node.fills && Array.isArray(node.fills)) {
      node.fills.forEach((f) => {
        if (f.type === 'SOLID' && f.color) {
          const hex = rgbToHex(f.color);
          if (!seen.has(hex)) {
            seen.add(hex);
            tokens.colors.push({ hex, opacity: f.opacity ?? 1 });
          }
        }
      });
    }
    if (node.style) {
      const s = node.style;
      tokens.typography.push({
        fontSize: s.fontSize,
        fontFamily: s.fontFamily,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeightPx,
        letterSpacing: s.letterSpacing,
      });
    }
    if (node.absoluteBoundingBox) {
      const b = node.absoluteBoundingBox;
      tokens.spacing.push({ width: b.width, height: b.height });
    }
    if (node.children) {
      node.children.forEach((c) => walk(c, depth + 1));
    }
  }

  function rgbToHex(c) {
    const r = Math.round((c.r || 0) * 255);
    const g = Math.round((c.g || 0) * 255);
    const b = Math.round((c.b || 0) * 255);
    return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
  }

  const nodeKey = Object.keys(output.nodes || {})[0];
  if (nodeKey && output.nodes[nodeKey]?.document) {
    walk(output.nodes[nodeKey].document);
  }
  if (output.document) {
    walk(output.document);
  }

  return tokens;
}

// Node 3-39 in Figma is typically "3:39" format in the API response
fetchFigma();
