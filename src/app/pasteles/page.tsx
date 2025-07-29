import Image from "next/image";
import Link from "next/link";
import { PASTELES } from "@/components/carousel-images";

// Asignar IDs únicos a cada pastel (puedes ajustar los nombres si lo deseas)
const PASTELES_PRODUCTOS = [
  { id: "empanada-pollo", name: "Empanada de Pollo", image: PASTELES[0].src, description: "Empanada rellena de pollo jugoso y especias." },
  { id: "pastel-manzana", name: "Pastel de Manzana", image: PASTELES[1].src, description: "Pastel dulce con relleno de manzana y canela." },
  { id: "pastel-platano", name: "Pastel de Plátano", image: PASTELES[2].src, description: "Pastel suave con plátano maduro y un toque de vainilla." },
  { id: "panuelo", name: "Pañuelo", image: PASTELES[3].src, description: "Hojaldre relleno de crema pastelera." },
  { id: "dona", name: "Dona", image: PASTELES[4].src, description: "Dona esponjosa cubierta de azúcar." },
];

export default function PastelesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Pasteles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PASTELES_PRODUCTOS.map((pastel) => (
          <Link
            key={pastel.id}
            href={`/pasteles/${pastel.id}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={pastel.image}
                alt={pastel.name}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 mb-2 text-center">{pastel.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 