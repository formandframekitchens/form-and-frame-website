// Render the server component with React's real JSX runtime. Playwright's own
// TSX transform produces component-test descriptors, not React server elements.
import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import ts from 'typescript';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
const filename = path.resolve('app/components/google-reviews.tsx');
const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText.replace('require("../lib/google-reviews")', 'require("../lib/google-reviews.ts")');
const component = new Module(filename);
component.filename = filename;
component.paths = Module._nodeModulePaths(path.dirname(filename));
component._compile(compiled, filename);
process.stdout.write(renderToStaticMarkup(createElement(component.exports.GoogleReviews)));
