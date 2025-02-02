import SkeletonPage from '@/components/skeleton/page'
import { PokemonDetailModel } from '@/models/pokemon'
import React from 'react'


const PokemonBMIDetailPage = ({ pokemon }: {pokemon: PokemonDetailModel | null}) => {

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