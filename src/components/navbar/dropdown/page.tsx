import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { capitaliseFirstLetter } from '@/utils/function';

const DropDownPage = () => {

  const [open, isOpen] = useState<boolean>(false);

  return (
    <div className='relative w-52'>
      <button className='flex items-center justify-between w-full p-[10px] cursor-pointer border-2 border-gray-300 z-10 text-white rounded-full
        shadow-gradient-search-box backdrop-blur-md'
      >
        <span>{capitaliseFirstLetter("All types")}</span>
        <span>{open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }</span>
      </button>
      { !open && (
        <div className='absolute top-full w-full max-w-[200px] m-0 p-0 overflow-y-auto
          list-none border border-[#ccc] bg-[#88c2fc33] backdrop-blur-md z-10 rounded-[8px]
          text-white'
          style={{scrollbarWidth: 'none'}}
        >
          <div className='flex items-center p-10 cursor-pointer hover:bg-[#88c2fc33] backdrop-blur-md'>
            All pokémon types
          </div>

        </div>
      )}
    </div>
  )
}

//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   scrollbar-width: none;
  
//   &::-webkit-scrollbar {
//     display: none;
//   }
export default DropDownPage