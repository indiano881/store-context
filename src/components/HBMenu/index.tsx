"use client"

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
  } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { useState } from "react";
  
  
export default function HBMenu() {

    const [open, setOpen] = useState(false);

    const style = {
      container: `relative top-1/4 w-full text-center mt-8`,
      item: `text-3xl text-white cursor-pointer hover:text-pt-secondary`,
      menu: {
        open: `h-full w-full `,
        close: `w-0 h-full`,
        default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-pt-primary`,
      },
    };

    function Menu({ children, open }:any) {
      return (
        <div
          className={`${style.menu.default} 
          ${open ? style.menu.open : style.menu.close}`}
        >
          {children}
        </div>
      );
    }

    function MenuContainer({ children }:any) {
      return <div className={style.container}>{children}</div>;
    }

    function MenuItem({ children, href }:any) {
      return (
        <div className="p-2">
          <a href={href} className={style.item}>
            {children}
          </a>
        </div>
      );
    }

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };


  
    return (
      <Navbar isBordered className="bg-pt-primary justify-between">
        <NavbarContent className="sm:hidden" justify="start">
        <>
        <button
  onClick={toggle}
  className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-pt-primary relative"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 absolute top-[-6px] left-[-20px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M4 18H10" />
    <path d="M4 12L16 12" />
    <path d="M4 6L20 6" />
  </svg>
</button>

      <Menu open={open}>
        <button
          aria-label="Close"
          className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
          onClick={toggle}
        >
          &times;
        </button>
        <MenuContainer>
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">Products</MenuItem>
          <MenuItem href="#">Profile</MenuItem>
          <MenuItem href="#">Wishlist</MenuItem>
        </MenuContainer>
      </Menu>
    </>
        </NavbarContent>
  
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit text-pt-secondary">Pandorum</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit text-pt-secondary">Pandorum</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="warning">
              Wishlist
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Profile
            </Link>
          </NavbarItem>
        </NavbarContent>
 
      </Navbar>
    );
  }
  const style = {
    container: `relative top-1/4 w-full text-center mt-8`,
    item: `text-3xl text-gray-400 cursor-pointer hover:text-white`,
    menu: {
      open: `h-full w-full `,
      close: `w-0 h-full`,
      default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-black`,
    },
  };
  
  function Menu({ children, open }:any) {
    return (
      <div
        className={`${style.menu.default} 
         ${open ? style.menu.open : style.menu.close}`}
      >
        {children}
      </div>
    );
  }
  
  function MenuContainer({ children }:any) {
    return <div className={style.container}>{children}</div>;
  }
  
  function MenuItem({ children, href }:any) {
    return (
      <div className="p-2">
        <a href={href} className={style.item}>
          {children}
        </a>
      </div>
    );
  }