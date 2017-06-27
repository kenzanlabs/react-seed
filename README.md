# react-seed
A seed / starter repo for React based UI applications

## Project Layout
An overview of important files and configurations for the applications

### Root Files ('dot' files)

Also know as 'dot' files, these are the build and build configuration files for the application

 * <i>bin/</i> - shell scripts for continuous integration and build environments
 * <i>.babelrc</i> - configuration file for Jest Babel preproccessor
 * <i>.editorconfig</i> - configuration file for EditorConfig IDE plugin
 * <i>.eslintr</i>c - linting rules for spec and build files
 * <i>package.json</i> - NPM / Yarn dependency configuration file, for
 build related dependencies and defines all runnable scripts and commands


### Application Files


 Application code, including unit tests. Directories are intended to be
 kept as flat as possible with a B.O.F. (birds of a feather) organization.

```
react-seed
│
└───src
│   │
│   │
│   └───subfolder1
│       │   file111.txt
│       │   file112.txt
│       │   ...
│
└───folder2
    │   file021.txt
    │   file022.txt
```


## Project Setup
Note: It is recommended that a Javascript based IDE is used, like Webstorm, as they have a lot of the code quality and syntax tooling supported as plugins, often times right out of the box.

### Steps

1. If you don't already have it, download and install NodeJS 4.x (comes with NPM).

2. This project favors Yarn, so make sure you have the latest by updating
it after installing Node by running

  ```
  $ npm install -g yarn@0.21.3
  ```

3. Now install the build and application dependencies by running

  ```
  $ yarn install
  ```

## Dependency Management
All dependencies added or removed from the project must be done so through yarn

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