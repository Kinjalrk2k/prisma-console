#!/usr/bin/env node
const repl = require("pretty-repl");
const path = require("path");
const { options } = require("./setupCLI");

const { PrismaClient } = require(path.join(process.cwd(), options?.client));

const prisma = new PrismaClient();

// workaround for https://github.com/prisma/prisma/issues/18292
prisma[Symbol.for('nodejs.util.inspect.custom')] = 'PrismaClient';

const replServer = repl.start({
  prompt: "◭ > ",
  useColors: true,
});

replServer.context.prisma = prisma;
