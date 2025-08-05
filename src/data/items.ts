import francesImg from "public/pan-frances.png.webp"
import italianoImg from "public/pan-italiano.png.webp"
import ciabattaImg from "public/pan-ciabatta.png"
import yemaImg from "public/pan-yema.png"
import croissantImg from "public/croissant.png"
import empanadaImg from "public/empanada.png"
import pastelManzanaImg from "public/pastel-manzana.png"
import pastelPlatanoImg from "public/pastel-platano.png"
import panueloImg from "public/panuelo.png"
import donaImg from "public/dona.png"

export interface Producto {
  src: any;
  alt: string;
  des: string;
  id: string;
  categoria: 'pan' | 'pastel';
  // Información detallada para páginas individuales
  name?: string;
  price?: string;
  image?: string;
  description?: string;
  ingredients?: string[];
  weight?: string;
  bakingTime?: string;
}

export const PRODUCTOS: Producto[] = [
  // Panes
  {
    src: francesImg,
    alt: "pan francés",
    des: "Pan Francés",
    id: "pan-frances",
    categoria: "pan",
    name: "Pan Francés",
    price: "$2.50",
    image: "/pan-frances.png.webp",
    description: "Pan clásico francés con corteza crujiente y miga suave. Horneado diariamente con harina de trigo de alta calidad y levadura natural. Perfecto para acompañar cualquier comida o para hacer tostadas.",
    ingredients: ["Harina de trigo", "Agua", "Levadura", "Sal", "Azúcar"],
    weight: "250g",
    bakingTime: "25 minutos"
  },
  {
    src: italianoImg,
    alt: "pan italiano",
    des: "Pan Italiano",
    id: "pan-italiano",
    categoria: "pan",
    name: "Pan Italiano",
    price: "$2.80",
    image: "/pan-italiano.png.webp",
    description: "Pan tradicional italiano con corteza dorada y miga suave. Horneado con técnicas tradicionales que le dan su sabor auténtico y textura perfecta.",
    ingredients: ["Harina de trigo", "Agua", "Levadura", "Sal", "Hierbas italianas"],
    weight: "280g",
    bakingTime: "28 minutos"
  },
  {
    src: ciabattaImg,
    alt: "pan ciabatta",
    des: "Pan Ciabatta",
    id: "pan-ciabatta",
    categoria: "pan",
    name: "Pan Ciabatta",
    price: "$3.00",
    image: "/pan-ciabatta.png",
    description: "Pan italiano con textura porosa y sabor característico. Su miga abierta y corteza crujiente lo hacen perfecto para sándwiches gourmet y acompañar sopas.",
    ingredients: ["Harina de trigo", "Agua", "Levadura", "Aceite de oliva", "Sal"],
    weight: "300g",
    bakingTime: "30 minutos"
  },
  {
    src: yemaImg,
    alt: "pan yema",
    des: "Pan de yema",
    id: "pan-yema",
    categoria: "pan",
    name: "Pan de Yema",
    price: "$1.50",
    image: "/pan-yema.png",
    description: "Pan dulce tradicional con yema de huevo que le da su color característico y sabor rico. Perfecto para el desayuno o como merienda.",
    ingredients: ["Harina de trigo", "Yemas de huevo", "Azúcar", "Mantequilla", "Leche"],
    weight: "150g",
    bakingTime: "20 minutos"
  },
  {
    src: croissantImg,
    alt: "pan croissant",
    des: "Pan Croissant",
    id: "pan-croissant",
    categoria: "pan",
    name: "Pan Croissant",
    price: "$2.80",
    image: "/croissant.png",
    description: "Pan croissant tradicional con capas de masa hojaldrada. Perfecto para el desayuno o como merienda.",
    ingredients: ["Harina de trigo", "Mantequilla", "Leche", "Azúcar", "Levadura"],
    weight: "180g",
    bakingTime: "18 minutos"
  },
  // Pasteles
  {
    src: empanadaImg,
    alt: "empanada de pollo",
    des: "Empanada de pollo",
    id: "empanada-pollo",
    categoria: "pastel",
    name: "Empanada de Pollo",
    price: "$3.50",
    image: "/empanada.png",
    description: "Empanada rellena de pollo jugoso y especias. Masa dorada y crujiente con relleno sabroso.",
    ingredients: ["Harina de trigo", "Pollo", "Cebolla", "Especias", "Aceite"],
    weight: "200g",
    bakingTime: "25 minutos"
  },
  {
    src: pastelManzanaImg,
    alt: "pastel de manzana",
    des: "Pastel de manzana",
    id: "pastel-manzana",
    categoria: "pastel",
    name: "Pastel de Manzana",
    price: "$4.00",
    image: "/pastel-manzana.png",
    description: "Pastel dulce con relleno de manzana y canela. Masa suave con un toque de vainilla.",
    ingredients: ["Harina de trigo", "Manzanas", "Canela", "Azúcar", "Mantequilla"],
    weight: "250g",
    bakingTime: "35 minutos"
  },
  {
    src: pastelPlatanoImg,
    alt: "pastel de plátano",
    des: "Pastel de plátano",
    id: "pastel-platano",
    categoria: "pastel",
    name: "Pastel de Plátano",
    price: "$3.80",
    image: "/pastel-platano.png",
    description: "Pastel suave con plátano maduro y un toque de vainilla. Textura húmeda y sabor natural.",
    ingredients: ["Harina de trigo", "Plátanos maduros", "Vainilla", "Azúcar", "Huevos"],
    weight: "220g",
    bakingTime: "30 minutos"
  },
  {
    src: panueloImg,
    alt: "pañuelo",
    des: "Pañuelo",
    id: "panuelo",
    categoria: "pastel",
    name: "Pañuelo",
    price: "$2.50",
    image: "/panuelo.png",
    description: "Hojaldre relleno de crema pastelera. Capas de masa crujiente con relleno suave y dulce.",
    ingredients: ["Harina de trigo", "Mantequilla", "Crema pastelera", "Azúcar", "Huevos"],
    weight: "150g",
    bakingTime: "20 minutos"
  },
  {
    src: donaImg,
    alt: "dona",
    des: "Dona",
    id: "dona",
    categoria: "pastel",
    name: "Dona",
    price: "$2.00",
    image: "/dona.png",
    description: "Dona esponjosa cubierta de azúcar. Masa suave y dulce perfecta para acompañar el café.",
    ingredients: ["Harina de trigo", "Azúcar", "Leche", "Huevos", "Levadura"],
    weight: "120g",
    bakingTime: "15 minutos"
  }
];

// Arrays separados para compatibilidad con componentes existentes
export const PANES = PRODUCTOS.filter(p => p.categoria === 'pan');
export const PASTELES = PRODUCTOS.filter(p => p.categoria === 'pastel');

// Función helper para obtener un producto por ID
export function getProductById(id: string): Producto | undefined {
  return PRODUCTOS.find(producto => producto.id === id);
}

// Función helper para obtener todos los productos de una categoría
export function getProductsByCategory(categoria: 'pan' | 'pastel'): Producto[] {
  return PRODUCTOS.filter(producto => producto.categoria === categoria);
} 