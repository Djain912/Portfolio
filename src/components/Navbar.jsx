import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

export default function Navbarr() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { name: "Home", id: "home" },
        { name: "About Me", id: "about-me" },
        { name: "My Projects", id: "projects" },
        { name: "My Skills", id: "skills" },
        { name: "Contact Me", id: "contact" },

    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='text-white font-extrabold bg-gray-950'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-[#00FFFF] text-4xl">CodeItUp</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10 text-white text-lg" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.id}>
                        <Link href={`#${item.id}`} className='text-[#00FFFF] text-3xl hover:text-[#00FFFF]'>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
                
            </NavbarContent>

            <NavbarMenu className='bg-dark'>
                {menuItems.map((item) => (
                    <NavbarMenuItem key={item.id}>
                        <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="gap-2 text-[#00FFFF] text-2xl hover:text-[#00FFFF]" href={`#${item.id}`} size="lg">
                            {item.name}

                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
