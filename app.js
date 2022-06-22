const repl = require("pretty-repl");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const replServer = repl.start({
  prompt: "◭ > ",
  useColors: true,
});

replServer.context.prisma = prisma;
