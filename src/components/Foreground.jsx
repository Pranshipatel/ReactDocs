import React, { useRef, useState } from 'react'
import Card from './Card'


const Foreground = () => {
 const ref = useRef(null);
  const data =[
    {
      desc: "ipsum dolor. sit amet consectetur adipisicing elit.",
      filesize:"0.9mb",
      close:false,
      tag:{isOPen:true, tagTitle:"Download Now", tagColor:"green"}
  },
  {
    desc: "ipsum dolor. sit amet consectetur adipisicing elit.",
    filesize:"0.9mb",
    close:true,
    tag:{isOPen:false, tagTitle:"Download Now", tagColor:"blue"}
},
{
  desc: "ipsum dolor. sit amet consectetur adipisicing elit.",
  filesize:"0.9mb",
  close:true,
  tag:{isOPen:true, tagTitle:" Now", tagColor:"green"}
},
{
  desc: "Hello this is pranshi patel",
  filesize:"0.1mb",
  close:false,
  tag:{isOPen:true, tagTitle:" Now", tagColor:"blue"}
},
  ]
  return (
    <div ref={ref}  className='fixed p-5 top-0 left-0  z-[3] w-full h-full flex gap-10 flex-wrap  '> 
     {data.map((item, index)=>(
      <Card data={item} reference={ref} />
     ))}
    </div>

  )
}

export default Foreground
