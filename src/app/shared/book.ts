import { Comment } from './comment';

export class Book {
    id: string;
    name: string;
    author: string;
    image: string;
    genre: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}