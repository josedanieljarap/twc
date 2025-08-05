import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/data/items";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const producto = getProductById(id);

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
            src={producto.src}
            alt={producto.alt}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {producto.name || producto.des}
            </h1>
            {producto.price && (
              <p className="text-3xl font-bold text-amber-600 mb-4">
                {producto.price}
              </p>
            )}
          </div>

          {producto.description && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Descripción
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {producto.description}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {producto.ingredients && (
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
            )}

            {(producto.weight || producto.bakingTime) && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Información Nutricional
                  </h3>
                  <div className="space-y-2">
                    {producto.weight && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Peso:</span>
                        <span className="font-medium">{producto.weight}</span>
                      </div>
                    )}
                    {producto.bakingTime && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tiempo de horneado:</span>
                        <span className="font-medium">{producto.bakingTime}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
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