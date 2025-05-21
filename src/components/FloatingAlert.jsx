import React from 'react'
import { Alert } from "@heroui/alert";
// import { desc } from 'framer-motion/client'; // Not used, can be removed

const FloatingAlert = () => {
  const title = "Notice:";
  const description = "Website still in development. Some features and content are pending.";
  const color = "warning"; // Always use the same color

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center my-3">
          <Alert color={color} title={title} description={description} />
        </div>
      </div>
    </div>
  )
}

export default FloatingAlert