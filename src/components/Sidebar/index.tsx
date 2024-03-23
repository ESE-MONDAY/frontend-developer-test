import { NavLink } from "react-router-dom";

const SideBarLinks =[
  {path: "/", icon: "home.svg"},
  {path: "/collections", icon: "nft-listing.svg"},
  {path: "/settings", icon: "settings.svg"},
]

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  
  return(
    <div className={` h-full py-7  flex-col justify-between z-20 flex w-full sm:translate-x-0 `}>
 
    <div className="w-full flex justify-center items-center">
    <img src="/images/logo.svg" alt="logo" className="py-7" />
    </div>

    <div >
    {
      SideBarLinks.map((items, index) =>(
        <div key={index} >
          <NavLink to={items.path ?? "/"}  className={`w-full flex  justify-center items-center  transition-all 1s  `}>
          <img src={`/icons/${items.icon}`} alt="logo" className={`h-20 w-full  ${
                window.location.pathname === items.path ? 'border-l-[1px] border-l-gray-200' : ''}`}/>
          </NavLink>
        </div>
      ))
    }
    </div>
 
   
   

    <div className="w-full flex justify-center items-center">
    <img src="/icons/notification.svg" alt="logo" className="py-7" />

    </div>
   

   </div>
   
  )
}

export default Sidebar;
