import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    let product = await prisma.prompt.findFirst({
        where: { id: Number(event.context.params.id) }
    })
    return product
})