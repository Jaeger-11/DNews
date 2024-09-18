export interface article{
    id: number
    title: string;
    brief: string;
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
    username?: any;
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

export interface content{
    category: string;
    param: string;
}

export interface contact{
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export interface ads{
    imageUrl:string; 
    siteUrl:string
}