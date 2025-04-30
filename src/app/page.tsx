import Image from "next/image";
import image from "./image/luffy.jpg"
import image02 from "./image/Zoro.jpg"
import image03 from "./image/san.png"


export default function Home() {
  return (
   <>
   <div className="text-center text-white w-3xs border-solid rounded-sm gap-5 px-[30px] bg-neutral-950 flex justify-items-center items-center " >
    <Image src={image} alt="luffy" className="" />
    <Image src={image02} alt="zoro" />
    <Image src={image03} alt="sanji" />
    <p>Monkey D. Luffy, é um personagem fictício e o protagonista da franquia One Piece criada por Eiichiro Oda. 
      Ele é apresentado como um jovem cujo corpo ganha as propriedades de borracha após ter comido a Gomu-Gomu no Mi, 
      uma das várias frutas amaldiçoadas conhecidas como Akuma no Mi ou Frutas do Diabo. </p>
     
   
   </div>
   <button className="bg-neutral-950 text-center text-white w-3xs mt-2 gap-5 rounded-sm">Saiba mais</button>
   </>
     
  );
}
