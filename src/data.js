import image1 from '/image/item-1.jpeg';
import image2 from '/image/item-2.jpeg';
import image3 from '/image/item-3.jpeg';
import image4 from '/image/item-4.jpeg';
import image5 from '/image/item-5.jpeg';
import image6 from '/image/item-6.jpeg';
import image7 from '/image/item-7.jpeg';
import image8 from '/image/item-8.jpeg';
import image9 from '/image/item-9.jpeg';

export const pageLinks = [
    { id:1, href: '/', text: 'Home' },
    { id:2, href: '#section2', text: 'About' },
    { id:3, href: '#section3', text: 'Menu' },
    { id:4, href: '#section4', text: 'Order Now' },

];

export const reviewsData = [
  {
    id: 1,
    name: "Mr. John Smith",
    jobTitle: "Art Director",
    stars: 5,
    review: "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again."
  },
  {
    id: 2,
    name: "Roger Stone",
    jobTitle: "Software Engineer",
    stars: 3,
    review: "The software engineer review goes here."
  },
  {
    id: 3,
    name: "Raymond Del Rosario",
    jobTitle: "Professor",
    stars: 4,
    review: "The professor's review goes here."
  },
  // Add more reviews here as needed
];

const menu = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: image1,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img: image2,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: image3,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: image4,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: image5,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: image6,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: image7,
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: image8,
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img: image9,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  export default menu;

