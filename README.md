# minimum-clasp3-typescript-starter

A minimal TypeScript starter for Google Apps Script projects using clasp v3, which drops native support for TypeScript transpiling.

## Features
- Minimum setup for TypeScript with esbuild
- No testing, no complicated build process, no specific formatting rules

## Usage
1. Clone this repository
2. Run `yarn install`
3. Edit `.clasp.json` to set your script ID
4. Edit `src/index.ts` to write your code
5. Authenticate with Google using `yarn clasp login`
    - See [official documentation](https://github.com/google/clasp?tab=readme-ov-file#authorization)
6. Run `yarn format` to foramt your code
7. Run `yarn deploy` to deploy your code
