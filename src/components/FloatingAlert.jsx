import React from 'react'
import {Alert} from "@heroui/alert";
import { desc } from 'framer-motion/client';

const FloatingAlert = () => {
  const title = "Notice:";
  const description = "Website still in development. Some features and content are pending.";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col w-full">
        {["warning"].map((color) => (
          <div key={color} className="w-full flex items-center my-3">
            <Alert color={color} title={title} description={description}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FloatingAlert