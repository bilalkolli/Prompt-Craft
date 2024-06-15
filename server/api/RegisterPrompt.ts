import { H3Event } from 'h3'
import { RepositoryPrompt } from '~/server/database/repository/RepositoryPrompt'
import type { IPrompt } from '~/types/IPrompt'

export default defineEventHandler(async (event:H3Event) => {
    const body = await readBody(event)
    const name:string = body.name
    const title:string = body.title
    const description:string  = body.description
    const category:string = body.category

    const userData: IPrompt = {
        name,
        title,
        description,
        category
    }
    return await RepositoryPrompt(userData)
})