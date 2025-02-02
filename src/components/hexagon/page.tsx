import { Stats } from '@/models/pokemon'
import React from 'react'

const HexagonPage = ({ status }: {status: Stats | null}) => {
  return (
    <div className='w-full grid relative gap-[10px] mb-[10px] px-[10px]'>
      {/* Just for inspection */}
      <div className='text-white'>HEXAGON</div>
      {/* End of just for inspection */}
    </div>
  )
}

export default HexagonPage