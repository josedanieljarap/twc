"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


type CarouselImage = {
    src: StaticImageData | string;
    alt: string;
    des: string;
    id?: string; // ID para la navegación
}

type CarouselProps = {
    headliner?: string;
    images?: CarouselImage[];
}

export default function Carousel({ headliner, images = []}: CarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollByAmount = 250; // Ajusta según el ancho de tus imágenes

    const handleLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
        }
    };

    const handleRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
        }
    };

    // Determinar la ruta base según el headliner
    const basePath = headliner?.toLowerCase() === "pasteles" ? "/pasteles" : "/panes";

    return(
        <section className="relative w-full max-w-6xl mx-auto px-4">
            {/* Flecha izquierda - Fija en el borde izquierdo del contenedor */}
            <button
                className="absolute left-4 top-35 text-2xl font-bold cursor-pointer z-10"
                onClick={handleLeft}
            >‹</button>
            
            {/* Contenedor principal con padding para las flechas */}
            <div className="px-8 mb-7">
                <h2 className="text-2xl font-semibold">
                    {headliner}
                </h2>
                
                {/* Contenedor de scroll - Solo las imágenes */}
                <div
                    ref={scrollRef}
                    className="flex gap-7 md:gap-10 overflow-x-auto pb-5"
                >
                    {images.map((img, idx) => (
                        <div key={idx} className="flex-shrink-0">
                            {img.id ? (
                                <Link href={`${basePath}/${img.id}`} className="group">
                                    <div className="transition-transform duration-300 group-hover:scale-105">
                                        <Image 
                                            src={img.src}
                                            alt={img.alt}
                                            width={250}
                                            height={250}
                                            className="object-contain md:w-80 md:h-80"
                                        />
                                        <h3 className="text-xl text-center font-medium mt-2 md:text-2xl group-hover:text-amber-600 transition-colors">
                                            {img.des}
                                        </h3>
                                    </div>
                                </Link>
                            ) : (
                                <div>
                                    <Image 
                                        src={img.src}
                                        alt={img.alt}
                                        width={250}
                                        height={250}
                                        className="object-contain md:w-80 md:h-80"
                                    />
                                    <h3 className="text-xl text-center font-medium mt-2 md:text-2xl">
                                        {img.des}
                                    </h3>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Flecha derecha - Fija en el borde derecho del contenedor */}
            <button
                className="absolute right-4 top-35 text-2xl font-bold cursor-pointer z-10"
                onClick={handleRight}
            >›</button>
        </section>
    );
}