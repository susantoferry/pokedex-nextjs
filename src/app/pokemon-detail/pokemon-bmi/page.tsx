import SkeletonPage from '@/components/skeleton/page'
import { PokemonDetailModel } from '@/models/pokemon'
import React, { useEffect, useState } from 'react'


const PokemonBMIDetailPage = ({ pokemonId }: {pokemonId: number | null}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [pokemon, setPokemon] = useState<PokemonDetailModel>();

  useEffect(() => {
    const fetchPokemonBMI = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const data = await response.json();
        console.log(data)
        setPokemon(data);
      } catch (error) {
        console.error("Error fetch  pokemon text:", error)
      } finally {
        setLoading(false)
      }
    }

    if (pokemonId) {
      fetchPokemonBMI();
    }
  }, [pokemonId])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-col justify-center text-center mx-auto w-full'>
      <div className='flex-col py-2 items-center justify-center gap-3'>
        {pokemon ?
          <div className='font-bold text-white'>Height</div>
          : <SkeletonPage size={"title"} iterate={1}/>
        }

        {pokemon ?
          <div className='p-[5px] rounded-full font-medium w-3/5 bg-[#112D3E57] backdrop-blur-md backdrop-saturate-150 text-white mb-3 border border-[rgb(180,180,180,0.3)]'>
            {`${pokemon.height / 10}m`}
          </div>
        : <SkeletonPage size={"sm-box"} iterate={1}/>}
      </div>

      <div className='flex-col py-2 items-center justify-center gap-3'>
        {pokemon ?
          <div className='font-bold text-white'>Weight</div>
        : <SkeletonPage size={"title"} iterate={1}/>
        }

        {pokemon ?
          <div className='p-[5px] rounded-full font-medium w-3/5 bg-[#112D3E57] backdrop-blur-md backdrop-saturate-150 text-white mb-3 border border-[rgb(180,180,180,0.3)]'>
            {`${pokemon.weight / 10}kg`}
          </div>
        : <SkeletonPage size={"sm-box"} iterate={1}/>}
      </div>

    </div>
  )
}

export default PokemonBMIDetailPage