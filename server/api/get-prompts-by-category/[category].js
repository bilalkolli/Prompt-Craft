import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let product = await prisma.prompt.findMany({
        where: { category: (event.context.params.category) }
    })
    return product
})