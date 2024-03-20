import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <div className="text-black bg-yellow-200">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ?   <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>

            <ul className={`md:flex duration-1000 absolute bg-yellow-200 px-6 ${open ? "top-6" : "-top-60"}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;