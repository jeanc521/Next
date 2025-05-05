"use client"
import { useEffect,useState } from "react";
import Image from "next/image";

interface IData {
    name: string;
    image: string;
}

const HookPage = () => {
const [characters, setCharacters] = useState<IData[]>([])

useEffect(() => {
    const load = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await res.json();
        setCharacters(data.results)

    };
    load()
},[])

    return(
        <>
            <h1 className="text-center">Pagina usando Hoocks do react</h1>
            <div>
                {characters.map((item, index) => {
                    return(
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <Image className="rounded-[50%] " src={item.image} alt={item.name} width={200} height={200} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default HookPage