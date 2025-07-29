import Image from "next/image";
import Link from "next/link";

// Datos de productos de panes
const PANES_PRODUCTOS = [
  {
    id: "pan-frances",
    name: "Pan Francés",
    price: "$2.50",
    image: "/pan-frances.png.webp",
    description: "Pan clásico francés con corteza crujiente y miga suave"
  },
  {
    id: "pan-ciabatta",
    name: "Pan Ciabatta",
    price: "$3.00",
    image: "/pan-ciabatta.png",
    description: "Pan italiano con textura porosa y sabor característico"
  },
  {
    id: "pan-italiano",
    name: "Pan Italiano",
    price: "$2.80",
    image: "/pan-italiano.png.webp",
    description: "Pan tradicional italiano con corteza dorada"
  },
  {
    id: "pan-yema",
    name: "Pan de Yema",
    price: "$1.50",
    image: "/pan-yema.png",
    description: "Pan dulce tradicional con yema de huevo"
  },
  {
    id: "pan-integral",
    name: "Pan Integral",
    price: "$3.50",
    image: "/pan-frances.png.webp", // Placeholder
    description: "Pan saludable con harina integral y semillas"
  },
  {
    id: "pan-baguette",
    name: "Baguette",
    price: "$2.20",
    image: "/pan-frances.png.webp", // Placeholder
    description: "Pan francés largo con corteza crujiente"
  },
  {
    id: "pan-croissant",
    name: "Pan Croissant",
    price: "$2.80",
    image: "/pan-frances.png.webp", // Placeholder
    description: "Pan croissant tradicional con capas de masa hojaldrada"
  }
];

export default function PanesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header de la página */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Panes</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra selección de panes artesanales, horneados diariamente 
          con ingredientes frescos y técnicas tradicionales.
        </p>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PANES_PRODUCTOS.map((producto) => (
          <Link 
            key={producto.id}
            href={`/panes/${producto.id}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={producto.image}
                alt={producto.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                {producto.name}
              </h3>
              <p className="text-2xl font-bold text-amber-600 mb-3">
                {producto.price}
              </p>
              <p className="text-gray-600 text-sm line-clamp-2">
                {producto.description}
              </p>
              <div className="mt-4 flex items-center text-amber-600 font-medium">
                <span>Ver detalles</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 