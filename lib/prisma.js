// lib/prisma.js
import { PrismaClient } from './generated/prisma'  // 
const globalForPrisma = globalThis

export const db =
  globalForPrisma.db ||
  new PrismaClient({
    log: ['query'], // optional in dev
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db
