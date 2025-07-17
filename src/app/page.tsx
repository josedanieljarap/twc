import Carrousel from "@/components/carrousel";
import { ITEMS_MAS_PEDIDOS } from "@/components/carrousel-images"

export default function Home() {

  return (
    <main>
      <Carrousel 
        headliner="Los más pedidos" 
        images={ITEMS_MAS_PEDIDOS}  
      />


      <div className="bg-violet-300 h-[300px]">
        <Carrousel headliner="Panes"/>
      </div>

      <div className="bg-fuchsia-500 h-[300px]">
        <Carrousel headliner="Pasteles" />
      </div>
    </main>
  );
}
