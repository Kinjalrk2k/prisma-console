#!/usr/bin/env node
const repl = require("pretty-repl");
const path = require("path");
const { options } = require("./setupCLI");

const { PrismaClient } = require(path.join(process.cwd(), options?.client));

const prisma = new PrismaClient();

const replServer = repl.start({
  prompt: "◭ > ",
  useColors: true,
});

replServer.context.prisma = prisma;
