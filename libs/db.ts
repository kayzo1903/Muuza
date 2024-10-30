import { PrismaClient } from "@prisma/client";

const prisma = global.prisma as string || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
