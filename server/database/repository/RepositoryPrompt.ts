import type { IPrompt } from "~/types/IPrompt";
import prisma from "../client";

export async function RepositoryPrompt(data: IPrompt) {
    const prompt = await prisma.prompt.create({
        data: {
            title: data.title ?? "",
            description: data.description ?? "",
            category: data.category ?? "",
            author: data.name ?? "",
        },
    });
    return prompt;
}