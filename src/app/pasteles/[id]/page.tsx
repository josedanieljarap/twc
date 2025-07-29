import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PASTELES } from "@/components/carousel-images";

const PASTELES_PRODUCTOS = [
  { id: "empanada-pollo", name: "Empanada de Pollo", image: PASTELES[0].src, description: "Empanada rellena de pollo jugoso y especias." },
  { id: "pastel-manzana", name: "Pastel de Manzana", image: PASTELES[1].src, description: "Pastel dulce con relleno de manzana y canela." },
  { id: "pastel-platano", name: "Pastel de Plátano", image: PASTELES[2].src, description: "Pastel suave con plátano maduro y un toque de vainilla." },
  { id: "panuelo", name: "Pañuelo", image: PASTELES[3].src, description: "Hojaldre relleno de crema pastelera." },
  { id: "dona", name: "Dona", image: PASTELES[4].src, description: "Dona esponjosa cubierta de azúcar." },
];

interface ProductPageProps {
  params: { id: string };
}

export default function PastelPage({ params }: ProductPageProps) {
  const pastel = PASTELES_PRODUCTOS.find(p => p.id === params.id);
  if (!pastel) notFound();
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
            src={pastel.image}
            alt={pastel.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{pastel.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{pastel.description}</p>
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