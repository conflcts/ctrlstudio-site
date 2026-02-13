# Ctrl

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Environment

Copy `.env.example` to `.env` and add:

- **EmailJS** – Service ID and Template ID for the contact form
- **Figma** (optional) – `FIGMA_ACCESS_TOKEN` to sync design tokens. Get a token from [Figma Settings](https://www.figma.com/settings).

## Figma Sync

To fetch the latest design from Figma:

```bash
npm run figma:export
```

This pulls design data from the CTRL Figma file and saves tokens to `scripts/output/`. Design tokens are defined in `src/design-tokens.css`.

**Security:** Never commit your `.env` file or share your Figma token. Revoke and regenerate tokens if exposed.
