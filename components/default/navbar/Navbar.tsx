import { FC, useState } from "react";
import { NavigationLink } from "@/types/navigationLinks";
import Navigation from "../common/NavigationLinks"; 

export interface NavbarProps {
  navigationLinks: NavigationLink[];
}

const Navbar: FC<NavbarProps> = ({ navigationLinks }) => {
  const [isBurger, setIsBurger] = useState(false); 
  const NavigationLinkClass: string ="nav-link"
  const handleBurgerClick = (): void => {
    setIsBurger(!isBurger);
    const targetElement = document.getElementById("menu");
    if (targetElement) {
      if (!isBurger) {
        targetElement.classList.add("left-[0]");
      } else {
        targetElement.classList.remove("left-[0]");
      }
    }
  };
  const handleLinkClick: () => void = () => {
    const targetElement = document.getElementById("menu");
    if (targetElement) {
        setIsBurger(false);
        targetElement.classList.add("left-[-100%]");
        targetElement.classList.remove("left-[0]");
      }
    }

  return (
    <header id="navbar" className="bg-green-950 fixed w-full top-0 left-0 z-50"  >
    <nav className="container flex items-center justify-between h-16 md:h-20">
      <div className="font-Lobster text-xl sm:text-2xl z-50">Location.</div>
      <div id="menu" className="absolute  top-0 left-[-100%] min-h-[100vh] w-full bg-green-950 backdrop-blur-sm flex items-center justify-center
      duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto">
        <div  className ="flex flex-col items-center gap-8 lg:flex-row" >
           <Navigation handleLinkClick={handleLinkClick} navigationLinks={navigationLinks} NavigationLinkClass={NavigationLinkClass}/>
        </div>
      </div>
      <div onClick={handleBurgerClick} className="text-2xl sm:4xl cursor-pointer z-50 lg:hidden">
      <i className={isBurger?`ri-close-large-line`:`ri-menu-4-line`} id="burger"></i>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
