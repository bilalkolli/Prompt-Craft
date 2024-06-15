import type { IComment } from './IComment.ts'

export interface IPrompt {
    id?: number;
    name?: string | null;
    title?: string | null;
    description?: string | null; 
    category?: string | null;
    Comments?: IComment | null;
}