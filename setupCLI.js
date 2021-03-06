#!/usr/bin/env node
const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const path = require("path");
const chalk = require("chalk");

const options = commandLineArgs([
  {
    name: "client",
    alias: "c",
    type: String,
    defaultValue: "./node_modules/@prisma/client",
  },
  {
    name: "help",
    alias: "h",
    type: Boolean,
    defaultValue: false,
  },
  {
    name: "version",
    alias: "v",
    type: Boolean,
    defaultValue: false,
  },
]);

const usage = commandLineUsage([
  {
    header: "Prisma Console",
    content:
      "REPL style console for Prisma ORM, heavily inspired from Rails console",
  },
  {
    header: "Options",
    optionList: [
      {
        name: "client",
        alias: "c",
        type: String,
        typeLabel: "{underline path}",
        description: "Path to the Prisma generated client",
        defaultValue: path.join(__dirname, "./node_modules/@prisma/client"),
      },
      {
        name: "help",
        alias: "h",
        type: Boolean,
        description: "This help page",
      },
      {
        name: "version",
        alias: "v",
        type: Boolean,
        description: "Print the version",
      },
    ],
  },
]);

if (!options?.client) {
  console.log(chalk.red("ERROR: Client cannot be empty."));
  console.log(
    chalk.red("Either provide a path to the client or omit the flag")
  );
  process.exit(1);
}

if (options?.help) {
  console.log(usage);
  process.exit(0);
}

if (options?.version) {
  const packageFile = require("./package.json");
  console.log(packageFile?.version);
  process.exit(0);
}

module.exports = { options };
