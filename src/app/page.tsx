import NavbarPage from "@/components/navbar/page";
import PokemonListPage from "./pokemon-list/page";


export default function Home() {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 md:hidden" />

      <NavbarPage />

      <PokemonListPage />
    </div>
  );
}
