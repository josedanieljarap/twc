import Image from "next/image";
import Link from "next/link";
import { PANES } from "@/data/items";

export default function PanesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Panes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PANES.map((producto) => (
          <Link
            key={producto.id}
            href={`/panes/${producto.id}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={producto.src}
                alt={producto.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 mb-2 text-center">{producto.des}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 