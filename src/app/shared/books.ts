import { Book } from './book';

export const BOOKS: Book[] = [
    {
        id: '0',
        name: 'Harry Potter and The Chamber of Secrets',
        author: 'J.K. Rowling',
        image: '/assets/images/Harry_Potter_2.png',
        genre: 'Fiction',
        featured: true,
        label: 'Classic',
        price: 'Rs. 290',
        description: 'Harry Potter\'s summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby\'s sinister predictions seem to be coming true.',
        comments: [
            {
                rating: 5,
                comment: 'JK Rowling did an outstanding job. Loved it!',
                author: 'John Lemon',
                date: '2021-03-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'It is mind-boggling how a person can be so creative in terms of fiction.',
                author: 'Paul McVites',
                date: '2019-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Pheonix is the real hero in this book.',
                author: 'Michael Jaikishan',
                date: '2020-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Finished it on the first day itself. Was on the edge of my seat.',
                author: 'Ringo Starry',
                date: '2021-03-02T17:57:28.556094Z'
            },
        ],
    },
    {
        id: '1',
        name: 'The Monk Who Sold His Ferrari',
        author: 'Robin Sharma',
        image: '/assets/images/The_Monk_Who_Sold_His_Ferrari.png',
        genre: 'Self-Help',
        featured: false,
        label: 'Philosophical',
        price: 'Rs. 250',
        description: 'The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. A sudden heart-attack creates havoc in the successful lawyer’s life. Jolted by the sudden onset of the illness, his practice comes to a standstill.',
        comments: [
            {
                rating: 5,
                comment: 'I feel Enlightened! Masterpiece by Robin.',
                author: 'Hrishikesh',
                date: '2019-11-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'This knowledge is as pure as the Himalayan snow.',
                author: 'Ryan Koshik',
                date: '2020-05-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'I wish I had read this book in my 20s.',
                author: 'Phillip Russel',
                date: '2014-04-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Tears in my eyes. Phenomenal!',
                author: 'Rishav Rajan',
                date: '2011-10-02T17:57:28.556094Z'
            },
        ],
    },
    {
        id: '2',
        name: 'Beyond Order',
        author: 'Dr. Jordan Peterson',
        image: '/assets/images/Beyond_order.png',
        genre: 'Psychology',
        featured: false,
        label: 'Eye-Opening',
        price: 'Rs. 450',
        description: 'Now in this much-anticipated sequel, Peterson goes further, showing that part of life\'s meaning comes from reaching out into the domain beyond what we know, and adapting to an ever-transforming world. While an excess of chaos threatens us with uncertainty, an excess of order leads to a lack of curiosity and creative vitality.',
        comments: [
            {
                rating: 5,
                comment: 'We need to save this man at all costs.',
                author: 'Veena Patel',
                date: '2021-11-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'I cleaned my room after this. Very effective.',
                author: 'Akon Green',
                date: '2018-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Very verbose! Mind-boggling',
                author: 'Suhas Chanda',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Shivam Ram Chandra',
                date: '2013-12-02T17:57:28.556094Z'
            },
        ],
    },
    {
        id: '3',
        name: 'Sapiens',
        author: 'Yuval Noah Harari',
        image: '/assets/images/Sapiens.png',
        genre: 'Science',
        featured: false,
        label: 'History',
        price: 'Rs. 300',
        description: ' Earth is 4.5 billion years old. In just a fraction of that time, one species among countless others has conquered it: us. In this bold and provocative book, Yuval Noah Harari explores who we are, how we got here and where we\'re going. ',
        comments: [
            {
                rating: 5,
                comment: 'I feel evolved after reading this.',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Humans are god\'s best creation. ',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Very nicely structured',
                author: 'Michael Geller',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
        ],
    }
];