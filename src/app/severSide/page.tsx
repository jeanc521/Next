import { Metadata } from 'next'
import { Suspense } from 'react'

type IData = {
    results: {
        name: string;
        status: string;
        id: string;
    }[];
}

export const metadata: Metadata = {
    title: "Lista de pesonagem rick and morty",
    description: "Aplicação teste com consumo de api"
}

 const ServeSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json();
  return (
    <>
        <div className='text-center'>Server side Page try</div>
        {data?.results.map((item, index) => {
            return(
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.id}</h2>
                    <p>{item.status}</p>
                </div>
            )
        })}
        </>
  )
}

export default ServeSide