import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {styles} from "../styles";
import {navLinks} from "../constants";
import {menu, close, logo} from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingNav} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <img src={logo} alt={logo} className="w-9 h-9 object-contain"/>

                <Link to="/" className="flex-col items-center gap-2" onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}>
                    <p className="text-white text-[32px] font-bold cursor-pointer flex"><span className="text-[#915eff]">U</span>nfolding the &nbsp;<span className="text-[#915eff]">U</span>niverse</p>
                    <p className="text-white text-[32px] font-bold cursor-pointer flex"><span className="text-[#915eff]">T</span>echnological &nbsp;<span className="text-[#915eff]">T</span>ranscendence</p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`p-6 bg-tertiary rounded-[20px] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ${toggle ? "flex" : "hidden"}`}>
                        <ul className="list-none flex flex-col gap-4 items-end">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                                    onClick={() => {
                                        setToggle(false);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
