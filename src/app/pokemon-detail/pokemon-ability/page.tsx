import SkeletonPage from '@/components/skeleton/page'
import { PokemonDetailModel } from '@/models/pokemon'
import { capitaliseFirstLetter } from '@/utils/function'
import React from 'react'

const PokemonAbilityDetailPage = ({ pokemon }: {pokemon: PokemonDetailModel | null}) => {
  return (
    <div className='flex flex-col justify-center text-center mx-auto w-full'>
      {pokemon ? (
        <div className='font-bold text-white'>Abilities</div>
      ): <SkeletonPage size={"title"} iterate={1} />}

      {pokemon ? (
        <div className='flex justify-between items-center w-full text-white gap-3 text-center'>
          {pokemon.abilities.map((ability, index) => (
            <div className='flex flex-col justify-center text-center mx-auto w-full' key={index}>
              <div className='p-[5px] rounded-full font-medium w-3/5 bg-[#112D3E57] backdrop-blur-md backdrop-saturate-150 text-white mb-3 border border-[rgb(180,180,180,0.3)]'>
                {capitaliseFirstLetter(ability.ability.name)}
              </div>
            </div>
          ))}
        </div>
      ) : <SkeletonPage size={"md-box"} iterate={1} />}
    </div>
  )
}

export default PokemonAbilityDetailPage