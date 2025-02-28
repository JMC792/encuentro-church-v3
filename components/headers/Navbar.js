'use client'

import {useState, useEffect, Fragment} from 'react';
import Link from 'next/link' 
import Image from "next/image";

//Components
import SideNav from './SideNav';

//Data
import navbar from '/public/locales/english/navbar.json';

//Images/SVG
import { Bars3Icon } from '@heroicons/react/24/solid'



function Navbar(props) {


    //Off Canvas (mobile) menu hook
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);


    // Adds Sticky to Navbar
    // useEffect(() => {
    //     window.addEventListener('scroll', isSticky);
    //     return () => {
    //         window.removeEventListener('scroll', isSticky);
    //     };
    // });
    // const isSticky = (e) => {
    //     const navbar = document.querySelector('.header-selection');
    //     const scrollTop = window.scrollY;
    //     scrollTop >= 250
    //         ? navbar.classList.add('is-sticky')
    //         : navbar.classList.remove('is-sticky');
    // };

    return(
        <Fragment>
            <nav className="absolute w-full z-10 top-0 text-white">
                <div className="header-selection sticky-style-1 py-4">
                    <div className="container mx-auto">

                        {/* List Wrapper */}
                        <div className="flex flex-nowrap items-center justify-between">

                            {/* Logo */}
                            <Link href={"/"} >
                                <Image src={props.logo} height={60} width={80} alt={"logo"} className={"cursor-pointer"}/>
                            </Link>

                            {/* List */}
                            <div className="hidden lg:flex gap-x-6">

                                {/* Home */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" }>
                                        <div className="capitalize">
                                            {props.link1}
                                        </div>
                                    </Link>
                                </div>

                                {/* About */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [props.link2]}>
                                        <div className="capitalize">
                                            {props.link2}
                                        </div>
                                    </Link>
                                </div>

                                {/* Portfolio */}
                                {/* <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [props.link3]}>
                                        <div className="capitalize">
                                            {props.link3}
                                        </div>
                                    </Link>
                                </div> */}

                                {/* Contact */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [props.link4]}>
                                        <div className="capitalize">
                                            {props.link4}
                                        </div>
                                    </Link>
                                </div>

                                {/* Service */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [props.link5]}>
                                        <div className="capitalize">
                                            {props.link5}
                                        </div>
                                    </Link>
                                </div>

                            </div>

                            {/* Contact Us */}
                            <div className="hidden lg:grid">
                                <div className='hover:text-yellow-600 transition-colors delay-100'>
                                    <a href={"tel: " + [props.phoneNumber]}>
                                        <div className='flex flex-col items-center'>
                                            <p>{navbar.call.title}</p>
                                            <p>{props.phoneNumber}</p>
                                        </div>
                                        
                                    </a>
                                </div>
                                    
                            </div>

                            {/* Off-canvas Menu */}
                            <div className="flex lg:hidden">
                                <div onClick={showOffcanvas} id="toggle-button">
                                    <Bars3Icon className="h-6 w-6 text-primary" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>

            <SideNav 
                links = {[
                    props.link1,
                    props.link2,
                    props.link3,
                    props.link4,
                    props.link5,
                ]}
                showOffcanvas={showOffcanvas} 
                offcanvas={offcanvas} 
                logo={props.logo}
            />

        </Fragment>
    )
}

export default Navbar
