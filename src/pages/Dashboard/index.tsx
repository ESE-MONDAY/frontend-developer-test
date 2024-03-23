import React from "react"





interface DashboardOutletProps {
  
}
const DashboardPage: React.FC<DashboardOutletProps>  = () => {



  return (
    <div className='bg-primary md:rounded-l-[32px] min-h-screen   '>
      <div className="py-2 sm:py-5 px-8 sm:px-16 flex  justify-between ">
      <Label>
        <div className="gap-3 flex items-center justify-center">
          <div className="flex gap-2 items-center">
          <img src="/icons/eth-icon.svg" alt='User Image' className='rounded-full h-6 w-6' />  
          <p className="border-r-[1px] border-r-white/30 pr-3 font-Sf-Pro-Regular text-sm text-white">ETH/USDT</p> 
          </div>
          <div className="flex justify-between items-center gap-1 text-green-500">
          <p className="font-Sf-Pro-Regular text-sm">1137.62</p>
          <p className="font-Sf-Pro-Regular text-sm">+2.62%</p>
          </div>
        
        </div>
      </Label>
      <Label>
        <div className="gap-3 flex items-center justify-center">
          <div className="flex gap-2 items-center">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='User Image' className='rounded-full h-6 w-6' />  
          <p className="border-r-[1px] hidden sm:flex border-r-white/30 pr-3 font-Sf-Pro-Regular text-sm text-white">Zash</p> 
          </div>
          <p className="font-Sf-Pro-Regular text-sm hidden sm:flex">User ID: 110000</p>
        </div>
      </Label>
      </div>
      <div className="py-5 b px-8 sm:px-16">
      <h1 className='text-xl sm:text-3xl text-white font-Sf-Pro-Medium font-medium'>Dashboard</h1>
      </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-3 px-8 sm:px-16 gap-8 sm:mt-8  ">
          <Card containerStyle="col-span-1" headerTitle="Cyberlinx #2551" imageUrl="nft_illustration.png" mintAddress="72UGr...YdD" tokenAddress= "72UGr...YdD" owner= "72UGr...YdD" />
          <Card containerStyle="col-span-1"  headerTitle="The Eyedeas #1029" imageUrl="middle.svg" mintAddress="72UGr...YdD" tokenAddress= "72UGr...YdD" owner= "72UGr...YdD" />
          <Card containerStyle="col-span-1 "  headerTitle="zombies #7919" imageUrl="last.svg"  mintAddress="72UGr...YdD" tokenAddress= "72UGr...YdD" owner= "72UGr...YdD"/>
        </div>

        <div className="py-16 flex justify-center items-center">
          <div className="w-[300px] rounded-full px-4 py-2  bg-black flex justify-between items-center">
            <button className="bg-gray-2 p-4 rounded-full">
              <img src="/icons/previous.svg" alt="previous nft" className="h-4 w-4" />
            </button>
            <button className="bg-gray-2 p-4 rounded-full">
              <img src="/icons/next.svg" alt="next nft" className="h-4 w-4" />
            </button>
          </div>
        </div>


  
    
    </div>
  )
}

export default DashboardPage


const Label = ({children}: {children: React.ReactNode}) => {
    return(
      <div className={`bg-gray-2 rounded-2xl px-3 py-2 w-auto`}>
        {children}
      </div>
    )
} 

interface CardProps {
  headerTitle: string;
  imageUrl: string;
  mintAddress: string;
  tokenAddress: string;
  owner: string;
  containerStyle : string
}

const Card: React.FC<CardProps> = ({ headerTitle, imageUrl,mintAddress,tokenAddress,owner, containerStyle }) => {
  return (
    <div className={`bg-black rounded-2xl p-3 w-auto ${containerStyle}`}>
      <h2 className="mb-2 font-Sf-Pro-Regular text-base text-white">{headerTitle}</h2>
      <img alt="nft collection" src={`/images/${imageUrl}`} className="w-full" />
      <div className="bg-gray-2 rounded-xl p-2 flex flex-col gap-1 mt-4">
        <div className="bg-gray-1 flex justify-between px-1 py-4 rounded-lg ">
          <p className="font-Sf-Pro-Regular text-sm text-white">Owner</p>
          <p className="font-Sf-Pro-Regular text-sm text-white/60">{owner}</p>
        </div>
        <div className="bg-gray-1 flex justify-between px-1 py-4 rounded-lg ">
          <p className="font-Sf-Pro-Regular text-sm text-white">Mint Address</p>
          <p className="font-Sf-Pro-Regular text-sm text-white/60">{mintAddress}</p>
        </div>
        <div className="bg-gray-1 flex justify-between px-1 py-4 rounded-lg ">
          <p className="font-Sf-Pro-Regular text-sm text-white">Token Address</p>
          <p className="font-Sf-Pro-Regular text-sm text-white/60">{tokenAddress}</p>
        </div>
      </div>
    </div>
  );
};