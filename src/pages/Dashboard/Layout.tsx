import React from 'react'
import { LayoutOutlet } from '../../routes/Layout'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-screen font-Sf-Pro-Thin text-white flex max-w-[1440px] mx-auto bg-black'>
      <div className=''>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      </div>
    
        <div className='flex-grow min-h-screen  h-auto overflow-y-auto'>
          {/* <Header /> */}
        <LayoutOutlet />
        </div>
    </div>
  )
}

export default DashboardLayout