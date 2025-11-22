"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    // Ocultar navbar en la ruta /login
    if (pathname === "/login" || pathname=="/") return null;

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><Link href="/login">Inicio</Link></li> */}
                        <li><Link href="/carros">Carros</Link></li>
                        <li><Link href="/ciudades">Ciudades</Link></li>
                        <li><Link href="/viajes">Viajes</Link></li>
                    </ul>
                </div>

                <Link className="btn btn-ghost text-xl" href="/">MAAC</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><Link href="/">Inicio</Link></li> */}
                    <li><Link href="/carros">Carros</Link></li>
                    <li><Link href="/ciudades">Ciudades</Link></li>
                    <li><Link href="/viajes">Viajes</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
