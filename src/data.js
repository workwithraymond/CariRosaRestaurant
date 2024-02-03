import image1 from '/image/item-1.jpeg';
import image2 from '/image/item-2.jpg';
import image3 from '/image/item-3.jpg';
import image4 from '/image/item-4.jpeg';
import image5 from '/image/item-5.jpg';
import image6 from '/image/item-6.jpg';
import image7 from '/image/item-7.jpg';
import image8 from '/image/item-8.jpg';
import image9 from '/image/item-9.jpg';
import image10 from '/image/item-11.jpeg';
import image11 from '/image/item-12.jpg';


export const pageLinks = [
    { id:1, href: '/', text: 'inicio' },
    { id:2, href: '#section2', text: 'Nosotros' },
    { id:3, href: '#section3', text: 'Menu' },
    { id:4, href: '#section4', text: 'Contacto' },

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
    title: 'Mangoo',
    category: 'desayuno',
    price: 3.99,
    img: image10,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
    {
      id: 2,
      title: 'Sopa de Camarones',
      category: 'almuerzo',
      price: 13.99,
      img: image2,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'Morir Soñando',
      category: 'bebidas',
      price: 6.99,
      img: image3,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    
      {
        id: 4,
        title: 'Revoltillo de Huevos con Tomates',
        category: 'desayuno',
        price: 3.99,
        img: image11,
        desc: `Revoltillo de Huevos con Tomates`,
      },
    {
      id: 5,
      title: 'Moro y bistec encebollado',
      category: 'almuerzo',
      price: 22.99,
      img: image5,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'jugo de tamarindo',
      category: 'bebidas',
      price: 18.99,
      img: image6,
      desc: `Portland chicharrones ethical edison bulb`,
    },
    {
      id: 7,
      title: 'riki taki',
      category: 'desayuno',
      price: 8.99,
      img: image7,
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'Sancocho Dominicano',
      category: 'almuerzo',
      price: 12.99,
      img: image8,
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'Jugo de Chinola',
      category: 'bebidas',
      price: 16.99,
      img: image9,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },


  ];
  export default menu;

 export const sliderImage = [
    {
      id: 1,
      img: image2, 
    },
    {
      id: 2,
      img: image7,
    },
    {
      id: 3,
      img: image10,
    },
    {
      id: 3,
      img: image11,
    }
    
  ];
