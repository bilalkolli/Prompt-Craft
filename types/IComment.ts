import type { IPrompt } from './IPrompt.ts'

export interface IComment {
    id?: number;
    author?: string | null;
    commentaire?: string | null;
    promptId?: number | null;
    prompt?: IPrompt | null;
}