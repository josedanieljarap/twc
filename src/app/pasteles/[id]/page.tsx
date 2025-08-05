import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/data/items";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function PastelPage({ params }: ProductPageProps) {
  const { id } = await params;
  const pastel = getProductById(id);
  
  if (!pastel || pastel.categoria !== 'pastel') {
    notFound();
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/pasteles" className="text-amber-600 hover:text-amber-700 font-medium">
          ← Volver a Pasteles
        </Link>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
          <Image
            src={pastel.src}
            alt={pastel.alt}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{pastel.name || pastel.des}</h1>
          {pastel.price && (
            <p className="text-3xl font-bold text-amber-600 mb-4">{pastel.price}</p>
          )}
          {pastel.description && (
            <p className="text-lg text-gray-600 mb-4">{pastel.description}</p>
          )}
          
          {pastel.ingredients && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ingredientes</h3>
              <ul className="space-y-1">
                {pastel.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
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