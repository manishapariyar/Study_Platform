// lib/prisma.js
import { PrismaClient } from './generated/prisma'  // 
const globalForPrisma = globalThis

export const db =
  globalForPrisma.db ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db
