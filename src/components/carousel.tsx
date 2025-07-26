"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";


type CarouselImage = {
    src: StaticImageData | string;
    alt: string;
    des: string;
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

    return(
        <section className="flex">
            <span
                className="text-5xl cursor-pointer mt-30 ml-3"
                onClick={handleLeft}
            >‹</span>
            
            <div>
                <h2 className="text-2xl font-semibold">
                    {headliner}
                </h2>
                <div
                    ref={scrollRef}
                    className="flex justify-between overflow-x-auto pb-5"
                    style={{ scrollBehavior: "smooth" }} // refuerzo por si el navegador lo soporta por CSS
                >
                    {images.map((img, idx) => (
                        <div key={idx} className="flex-shrink-0">
                            <Image 
                                src={img.src}
                                alt={img.alt}
                                width={250}
                                height={250}
                                className="object-contain"
                            />
                            <h3 className="text-xl text-center font-medium">{img.des}</h3>
                        </div>
                    ))}
                </div>
            </div>
            
            <span
                className="text-5xl cursor-pointer mt-30 mr-3"
                onClick={handleRight}
            >›</span>
        </section>
    );
}