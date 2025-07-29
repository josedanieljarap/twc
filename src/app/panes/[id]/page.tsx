import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Datos de productos de panes
const PANES_PRODUCTOS = [
  {
    id: "pan-frances",
    name: "Pan Francés",
    price: "$2.50",
    image: "/pan-frances.png.webp",
    description: "Pan clásico francés con corteza crujiente y miga suave. Horneado diariamente con harina de trigo de alta calidad y levadura natural. Perfecto para acompañar cualquier comida o para hacer tostadas.",
    ingredients: ["Harina de trigo", "Agua", "Levadura", "Sal", "Azúcar"],
    weight: "250g",
    bakingTime: "25 minutos"
  },
  {
    id: "pan-ciabatta",
    name: "Pan Ciabatta",
    price: "$3.00",
    image: "/pan-ciabatta.png",
    description: "Pan italiano con textura porosa y sabor característico. Su miga abierta y corteza crujiente lo hacen perfecto para sándwiches gourmet y acompañar sopas.",
    ingredients: ["Harina de trigo", "Agua", "Levadura", "Aceite de oliva", "Sal"],
    weight: "300g",
    bakingTime: "30 minutos"
  },
  {
    id: "pan-italiano",
    name: "Pan Italiano",
    price: "$2.80",
    image: "/pan-italiano.png.webp",
    description: "Pan tradicional italiano con corteza dorada y miga suave. Horneado con técnicas tradicionales que le dan su sabor auténtico y textura perfecta.",
    ingredients: ["Harina de trigo", "Agua", "Levadura", "Sal", "Hierbas italianas"],
    weight: "280g",
    bakingTime: "28 minutos"
  },
  {
    id: "pan-yema",
    name: "Pan de Yema",
    price: "$1.50",
    image: "/pan-yema.png",
    description: "Pan dulce tradicional con yema de huevo que le da su color característico y sabor rico. Perfecto para el desayuno o como merienda.",
    ingredients: ["Harina de trigo", "Yemas de huevo", "Azúcar", "Mantequilla", "Leche"],
    weight: "150g",
    bakingTime: "20 minutos"
  },
  {
    id: "pan-integral",
    name: "Pan Integral",
    price: "$3.50",
    image: "/pan-frances.png.webp", // Placeholder
    description: "Pan saludable con harina integral y semillas. Rico en fibra y nutrientes, perfecto para una alimentación balanceada.",
    ingredients: ["Harina integral", "Semillas de girasol", "Semillas de chía", "Agua", "Levadura"],
    weight: "320g",
    bakingTime: "35 minutos"
  },
  {
    id: "pan-baguette",
    name: "Baguette",
    price: "$2.20",
    image: "/pan-frances.png.webp", // Placeholder
    description: "Pan francés largo con corteza crujiente y miga suave. El clásico pan francés perfecto para acompañar cualquier comida.",
    ingredients: ["Harina de trigo", "Agua", "Levadura", "Sal"],
    weight: "200g",
    bakingTime: "22 minutos"
  },
  {
    id: "pan-croissant",
    name: "Pan Croissant",
    price: "$2.80",
    image: "/pan-frances.png.webp", // Placeholder
    description: "Pan croissant tradicional con capas de masa hojaldrada. Perfecto para el desayuno o como merienda.",
    ingredients: ["Harina de trigo", "Mantequilla", "Leche", "Azúcar", "Levadura"],
    weight: "180g",
    bakingTime: "18 minutos"
  }
];

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const producto = PANES_PRODUCTOS.find(p => p.id === id);

  if (!producto) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/panes" className="text-amber-600 hover:text-amber-700 font-medium">
          ← Volver a Panes
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Imagen del producto */}
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
          <Image
            src={producto.image}
            alt={producto.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {producto.name}
            </h1>
            <p className="text-3xl font-bold text-amber-600 mb-4">
              {producto.price}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Descripción
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {producto.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Ingredientes
              </h3>
              <ul className="space-y-1">
                {producto.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Información Nutricional
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso:</span>
                    <span className="font-medium">{producto.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tiempo de horneado:</span>
                    <span className="font-medium">{producto.bakingTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de compra */}
          <div className="pt-6">
            <button className="w-full bg-amber-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors duration-200">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 