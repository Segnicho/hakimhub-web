import {AiOutlineLoading3Quarters} from "react-icons/ai"

import React from 'react'

const Loading = () => {
  return (
    <div className="animate-spin flex justify-center text-accent">
        <AiOutlineLoading3Quarters height={8} width={8}/>
    </div>
  )
}

export default Loading