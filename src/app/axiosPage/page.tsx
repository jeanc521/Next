"use client"

import { useEffect,useState, Suspense } from "react"
import Image from "next/image"
import { Rickapi } from "../constants/api"
import { disconnect } from "process";

interface IData {
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
}

const AxiosPage = () => {
const [data, setData] = useState<IData[]>([])

useEffect(() => {
    Rickapi.get("/character").then((res) => {
        setData(res.data.results)
    }).catch((error) => {
        console.error("Deu ruim tua requesição, SE FUDEU!")
    })
},[])
    return(
        <>
            <h1 className="text-center text-2xl">Axios page client side</h1>
            <Suspense fallback={<div>loading...</div>}>
            {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <Image className="rounded-[50%] " src={item.image} alt={item.name} width={200} height={200}/>
                    <p>{item.gender}</p>
                    <p>{item.species}</p>
                    <p>{item.status}</p>
                </div>
            ))}
            </Suspense>

        </>
    )
}

export default AxiosPage