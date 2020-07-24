
<p align="center"><h1 align="center">
  request-keeper
</h1>

<p align="center">

</p>

<p align="center">
  <a href="https://www.npmjs.org/package/request-keeper"><img src="https://badgen.net/npm/v/request-keeper" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/request-keeper"><img src="https://badgen.net/npm/license/request-keeper" alt="license"/></a>
  <a href="https://www.npmjs.org/package/request-keeper"><img src="https://badgen.net/npm/dt/request-keeper" alt="downloads"/></a>
  <a href="https://travis-ci.org/alemagio/request-keeper"><img src="https://badgen.net/travis/alemagio/request-keeper" alt="build"/></a>
  <a href="https://codecov.io/gh/alemagio/request-keeper"><img src="https://badgen.net/codecov/c/github/alemagio/request-keeper" alt="codecov"/></a>
  <a href="https://snyk.io/test/github/alemagio/request-keeper"><img src="https://snyk.io/test/github/alemagio/request-keeper/badge.svg" alt="Known Vulnerabilities"/></a>
  <a href="./SECURITY.md"><img src="https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg" alt="Responsible Disclosure Policy" /></a>
</p>

# About

The idea of this project is to provide an easy way of visualizing requests coming from your WIP client while there is still no server ready.


# Install

You can install it as a dev dependency for your project

```bash
npm install --save-dev request-keeper
```
```bash
yard add -D request-keeper
```

or globally on your system

```bash
npm install -g request-keeper
```

# Usage

Simply create a script on your package.json

```json
"scripts": {
  "server": "node node_modules/request-keeper/index.js"
}
```

or if you installed it globally you can simply run

```bash
npx request-keeper
```

# Contributing

Please consult [CONTRIBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.

# Author

**request-keeper** © [alemagio](https://github.com/alemagio), Released under the [Apache-2.0](./LICENSE) License.
