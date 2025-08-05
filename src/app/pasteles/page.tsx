import Image from "next/image";
import Link from "next/link";
import { PASTELES } from "@/data/items";

export default function PastelesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Pasteles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PASTELES.map((pastel) => (
          <Link
            key={pastel.id}
            href={`/pasteles/${pastel.id}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={pastel.src}
                alt={pastel.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 mb-2 text-center">{pastel.des}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 