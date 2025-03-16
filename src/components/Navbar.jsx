import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

export default function Navbarr() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  
  // Swapped the order of "My Skills" and "My Projects"
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about-me" },
    { name: "My Skills", id: "skills" },     // Moved up in the order
    { name: "My Projects", id: "projects" }, // Moved down in the order
    { name: "Contact Me", id: "contact" },
  ];

  // Handle scroll to add glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Track scroll position to highlight active section
    const handleScrollSpy = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (!section) return;
        
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveItem(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollSpy);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, [menuItems]);

  // Updated smooth scroll function to always close menu
  const scrollToSection = (id) => {
    // Always close menu when an item is clicked
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      className={`text-white font-extrabold ${scrolled ? 'bg-gray-950/80 backdrop-blur-md' : 'bg-gray-950'} transition-all duration-300 fixed`}
      maxWidth="full"
      position="sticky"
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
        />
        <NavbarBrand>
          <div className="flex items-center">
            <div className="relative group">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-4xl transition-all duration-300 hover:scale-105">
                Darshan Jain
              </p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </div>
            <div className="ml-2 hidden md:flex">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 ml-1 animate-pulse" style={{ animationDelay: "300ms" }}></div>
              <div className="w-2 h-2 rounded-full bg-cyan-400 ml-1 animate-pulse" style={{ animationDelay: "600ms" }}></div>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-0 text-white" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id} className="relative">
            <Link 
              href={`#${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg md:text-xl lg:text-2xl px-4 py-2 mx-1 transition-all duration-300 relative group ${activeItem === item.id ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-cyan-400'}`}
              underline="none"
            >
              {item.name}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${activeItem === item.id ? 'w-4/5' : 'w-0 group-hover:w-2/3'}`}></span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className='bg-gray-900/95 backdrop-blur-lg pt-8 gap-6'>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id} className="py-2">
            <Link
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-2xl transition-all duration-300 flex items-center py-2 px-4 rounded-lg ${activeItem === item.id ? 'text-cyan-400 bg-cyan-400/10 font-bold' : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'}`}
              href={`#${item.id}`}
            >
              <span className={`mr-2 inline-block w-1.5 h-6 rounded-full ${activeItem === item.id ? 'bg-gradient-to-b from-cyan-400 to-blue-500' : 'bg-transparent'}`}></span>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}