# react-webpack-stack

Use this repository as a starting point for React-based UI applications.

## Project Setup

We recommend using a JavaScript-based IDE (like WebStorm) as they provide code quality and syntax tooling supported as plugins, often right out of the box.

### Setup Steps

1. If you don't already have it, download and install NodeJS 6.4.0 or later. (Installing NodeJS will also install npm.)

2. This project favors Yarn, so make sure you have the latest.

  ```
  $ npm install -g yarn@0.24.6
  ```

3. Install the build and application dependencies.

  ```
  $ yarn install
  ```

## Project Layout

The project contains the following configuration and application files.

### Root Files

Also know as *dot* files, these are the build and the build configuration files for the application.

 * <i>bin/</i> - Shell scripts for continuous integration and build environments.
 * <i>.babelrc</i> - Configuration file for Babel preproccessor.
 * <i>.editorconfig</i> - Configuration file for EditorConfig IDE plugin.
 * <i>.eslintr</i>c - Linting rules for spec and build files.
 * <i>jest.config.js</i> - Configuration file for Jest (test runner).
 * <i>package.json</i> - NPM / Yarn dependency configuration file, for
 build related dependencies. This defines all runnable scripts and commands.
 * <i>tsconfig.json</i> - Configuration file for the TypeScript compiler.
 * <i>tslint.json</i> - Linting rules for the TypeScript source code.
 * <i>webpack.config.common.js</i> - Webpack config for managing shared webpack configurations.
 * <i>webpack.config.develop.js</i> - Webpack config for local development.
 * <i>webpack.config.prod.js</i> - Webpack config for production builds.

### Application Files

 The following directories contain the application code, including unit tests. They are intended to be kept as flat as possible with a BoF (birds of a feather) organization.

```
react-seed
│
└───src
│   │
│   │
│   └───subfolder1
│       │   file111.tsx
│       │   file111.spec.tsx
│       │   ...
│
└───folder2
    │   file021.tsx
    │   file022.spec.tsx
```

## Tasks

This project uses webpack as the build tool, executed with NPM scripts. All available tasks are in the *scripts* section of *package.json*.

### Development

Start up a development server using
[webpack-dev-server](https://github.com/webpack/webpack-dev-server)
which watches for changes and re-deploys as needed.

```
$ yarn run develop
```

webpack-dev-server automatically opens a browser window to ```localhost:9000```.

### Production

This is the production build task for the project. Run it prior to deploying to an environment to build a production version of the application.

```
$ yarn run build
```

### Demo

To demo a production build locally on ```localhost:9000``` run:

```
$ yarn run serve
```

**Note:** We recommend running this command from the master branch or a tag. By default, this proxies with the webpack-dev-server proxy.

This task is also aliased as:

```
$ yarn start
```

### Tests

To execute unit tests run:

```
$ yarn run test
```

This command uses <i>jest.config.json</i> as a configuration file for unit tests. It will display a percentage of the files covered by the unit tests.

**Note:** Jest automatically uses the correct test mode for the current build environment. For a development build, tests are run in TDD (test-driven development) mode. For a production build, tests are run in CI (continuous integration) mode. CI mode runs all tests once using PhantomJS, while TDD runs the same tests using the Chrome browser.

## Dependency Management

All dependencies added or removed from the project must be done so through Yarn.

### Add

```bash
# use --dev if it as devDependency
$ yarn add <package-name> [--dev]
```

### Remove

```
$ yarn remove <package-name>
```

### Upgrade

```
$ yarn upgrade <package-name>
```

## LICENSE
Copyright 2017 Kenzan, LLC - <http://kenzan.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.