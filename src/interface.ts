export interface article{
    id: number
    title: string;
    briefDescription: string;
    content: string;
    author: string;
    publishedDate: string;
    category: string;
    tags: Array<string>,
    imageUrl: string;
}