import { Author } from './author';

export const AUTHORS: Author[] = [
    {
        id: '0',
        name: 'Jordon B. Peterson',
        image: '/assets/images/Jordon_Peterson.jpg',
        age: "58",
        books: "12 Rules for Life, Beyond Order, Maps of Meaning.",
        featured: true,
        // tslint:disable-next-line:max-line-length
        description: 'Jordan Bernt Peterson is a Canadian professor of psychology at the University of Toronto, a clinical psychologist, and YouTube personality.'
    },
    {
        id: '1',
        name: 'Robin Sharma',
        image: '/assets/images/Robin_Sharma.jpg',
        age: "56",
        books: "The Monk Who Sold His Ferrari, Who Will Cry When You Die, The Saint, the Surfer, and the CEO.",
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Robin Sharma is a Canadian writer, best known for his The Monk Who Sold His Ferrari book series.'
    },
    {
        id: '2',
        name: 'Yuval Noah Harai',
        image: '/assets/images/Yuval_Noah_Harari.jpg',
        age: "45",
        books: "Sapiens, Homo Deus, 21 Lessons for the 21st Century.",
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Yuval Noah Harari is the author of the popular science bestsellers Sapiens: A Brief History of Humankind.'
    },
    {
        id: '3',
        name: 'J.K. Rowling',
        image: '/assets/images/JK_Rowling.jpg',
        age: "55",
        books: "The Harry Potter Series.",
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'J. K. Rowling is a British author, philanthropist, film producer, television producer, and screenwriter.'
        }
]; 