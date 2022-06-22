#!/usr/bin/env node
const repl = require("pretty-repl");
const { options } = require("./setupCLI");

const { PrismaClient } = require(options?.client);

const prisma = new PrismaClient();

const replServer = repl.start({
  prompt: "◭ > ",
  useColors: true,
});

replServer.context.prisma = prisma;
