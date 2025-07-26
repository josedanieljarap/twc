import Carousel from "@/components/carousel";
import { ITEMS_MAS_PEDIDOS } from "@/components/carousel-images"

export default function Home() {

  return (
    <main>
      <Carousel 
        headliner="Panes"
        images={ITEMS_MAS_PEDIDOS}
      />

      <Carousel 
        headliner="Pasteles"
        images={ITEMS_MAS_PEDIDOS}
      />
    </main>
  );
}
