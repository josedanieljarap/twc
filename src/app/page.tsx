import Carousel from "@/components/carousel";
import { PANES, PASTELES } from "@/components/carousel-images"

export default function Home() {

  return (
    <main>
      <Carousel 
        headliner="Panes"
        images={PANES}
      />

      <Carousel 
        headliner="Pasteles"
        images={PASTELES}
      />
    </main>
  );
}
