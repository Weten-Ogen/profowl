import { CarouselBg } from "@/components/customs/customcarolbg";
import PlayerGrid from "@/components/customs/playersgrid";
import SearchBar from "@/components/customs/searchbar";


export default function Home() {
  return (
   <div className=" ">
      <div className="h-[60vh] overflow-hidden">
        <CarouselBg/>
        <SearchBar />  
      </div>
      <PlayerGrid/>
   </div>
  );
}
