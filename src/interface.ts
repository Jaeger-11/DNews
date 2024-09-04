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

export interface apiArticle{
    id: number;
    title: string;
    body: string;
}

export interface authenticate{
    username?: string;
    email: string;
    password: string;
}

export interface user{
    username: string;
    email: string;
    uid: string;
}

export interface comment{
    id: number;
    articleId: number;
    username: string;
    timestamp: string;
    comment: string;
}