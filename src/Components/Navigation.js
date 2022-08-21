import React,{useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import NavigationStyle from "./Navigation.css"
import Logo from "../Assets/logo.png"

const Navigation = () => {

    // Gather location information
    const location = useLocation();

    // State for opening navigation
    const [navbar,setNavbar] = useState(false);
    const handleNav = (e) =>{
        e.preventDefault()
        setNavbar(!navbar)
    }
    return (
        <nav className="mx-auto w-full fixed z-50 bg-white bg-opacity-70 pt-2">

                <div className="md:w-10/12 w-11/12 md:px-0 px-5 pt-1 mx-auto flex justify-between items-center">
                    <div className="flex justify-center">
                        <img src={Logo} className="w-20 mb-1 mr-4 object-contain" />
                    </div>
                    <div className="md:flex justify-aroud  items-center hidden">
                        <Link className={`ml-10 text-lg text-blue-900 ${location.pathname === '/' ? `font-bold border-b-4 border-blue-900` : ``}`} to="/">Home</Link>
                        <Link className={`ml-10 text-lg text-blue-900 ${location.pathname === '/learning' ? `font-bold border-b-4 border-blue-900` : ``}`} to="/learning">Learning</Link>
                        <Link className={`ml-10 text-lg text-blue-900 ${location.pathname === '/schedule' ? `font-bold border-b-4 border-blue-900` : ``}`} to="/schedule">Schedule</Link>
                        <Link className={`ml-10 text-lg text-blue-900 ${location.pathname === '/resources' ? `font-bold border-b-4 border-blue-900` : ``}`} to="/resources">Resources</Link>
                    </div>
                    <div className="md:hidden">
                        <a href="#" onClick={handleNav}>
                        {navbar ? 
                        (<svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>)
                        :
                        (<svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>)}
                        
                        </a>
                    </div>
                </div>

                <div className="w-screen h-screen fixed bg-blue-800 bg-opacity-90 hidden" id={navbar?"OpenNav":""}>
                    <div className="font-sans">
                        <ul className="flex-col w-screen h-screen text-center pt-32 justify-around items-center text-xl tracking-wide text-white">
                            <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline" >
                            <Link className={`ml-10 text-lg text-white ${location.pathname === '/' ? `font-bold border-b-4 border-white ` : ``}`} to="/">Home</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline">
                            <Link className={`ml-10 text-lg text-white ${location.pathname === '/learning' ? `font-bold border-b-4 border-white  ` : ``}`} to="/learning">Learning</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline">
                            <Link className={`ml-10 text-lg text-white ${location.pathname === '/schedule' ? `font-bold border-b-4 border-white ` : ``}`} to="/schedule">Schedule</Link>
                            </li>
                            <li onClick={handleNav} className="mr-8 py-3 font-normal hover:underline">
                            <Link className={`ml-10 text-lg text-white ${location.pathname === '/resources' ? `font-bold border-b-4 border-white ` : ``}`} to="/resources">Resources</Link>
                            </li>
                        </ul>
                    </div>

                </div>

        </nav>
    )
}

export default Navigation
