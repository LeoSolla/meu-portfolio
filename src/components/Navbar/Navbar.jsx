import { useState, useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import pdf from '../../assets';
import './Navbar.css';

const NavbarItem = ({ tittle, classProps }) => {
    return (
        <a href={'#'+ tittle} className={`mx-4 cursor-pointer ${classProps}`}>
            {tittle} 
        </a>
    );
}

const Navbar = () => {  
    const [navColor, setnavColor] = useState("transparent");
    const [navBottomWidth, setnavBottomWidth] = useState("0");
    const [navBottomColor, setnavBottomColorr] = useState("transparent");
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
      window.scrollY > 10 ? setnavBottomWidth("1px") : setnavBottomWidth("0");
      window.scrollY > 10 ? setnavBottomColorr("#e5e5e5") : setnavBottomColorr("transparent");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav style={{
            //backgroundColor: navColor,
            borderBottomColor: navBottomColor,
            borderBottomWidth: navBottomWidth,
            transition: "all .3s"
          }}
          className="navbar w-full flex md:justify-end items-center p-4">
            <ul className="md:flex hidden list-one flex-row items-center flex-initial">
                {["About Me", "Portfolio", "Contact"].map ((item, index) => (
                    <NavbarItem key={item + index} tittle={item} href={'#'+ item}/>
                ))}
                <a href={pdf.resume} className="bg-[#0071e3] text-white py-2 px-8 mx-4 rounded-md cursor-pointer hover:bg-[#0077ED] hover:text-white" rel="noopener" target="_blank">
                    Resume
                </a>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none 
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["About Me", "Portfolio", "Contact"].map ((item, index) => (
                            <NavbarItem key={item + index} tittle={item} href={'#'+ item} classProps="my-2 text-lg"/>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;