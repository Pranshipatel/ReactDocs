import React  from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"




function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='w-60 flex-shrink-0 px-5 py-6 relative overflow-hidden h-64 text-white rounded-[40px] bg-zinc-900/90 '>
     <FaRegFileAlt />
     <p className='text-sm text-white font-semibold leading-tight mt-5 '>{data.desc}</p>
     <div className='footer  absolute bottom-0 w-full h-20 left-0 text-white  '>
        <div className='px-5  py-2  flex items-center w-full justify-between'>
          <h1>{data.filesize}</h1>
          <span className='text-white bg-zinc-800 rounded-full p-[0.1vw] '>
            {data.close ?<IoMdClose /> : <BsDownload />}
            
            </span>
        </div>
         {
          data.tag.isOPen ? (  
          <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
         ) : (null)
        } 
       
     </div>
    </motion.div>

  )
}

export default Card
