import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import { H3Event } from 'h3'

export default eventHandler(async (event:H3Event) => {
    let prompts = await prisma.prompt.findMany()
    return prompts
})