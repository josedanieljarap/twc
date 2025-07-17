import Image, { StaticImageData } from "next/image";


type CarrouselImage = {
    src: StaticImageData | string;
    alt: string;
    des: string;
}

type CarrouselProps = {
    headliner?: string;
    images?: CarrouselImage[];
}

export default function Carrousel({ headliner, images = []}: CarrouselProps) {
    return(
        <section>
            <h2 className="text-2xl font-semibold">
                {headliner}
            </h2>
            <div className="flex justify-between overflow-x-auto pb-5">
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
        </section>
    );
}