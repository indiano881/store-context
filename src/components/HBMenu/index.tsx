"use client"

import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
  } from "@nextui-org/react";
  import { AcmeLogo } from "./AcmeLogo";
import { useState } from "react";
  
  
  export default function HBMenu() {
    const [open, setOpen] = useState(false);
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
  const toggle = () => {
    setOpen((prevState) => !prevState);
  };
    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];
  
    return (
      <Navbar disableAnimation isBordered>
        <NavbarContent className="sm:hidden" justify="start">
        <>
      <button
        onClick={toggle}
        className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-black"
      >
        Open
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
          <MenuItem href="#">Contact</MenuItem>
          <MenuItem href="#">Services</MenuItem>
          <MenuItem href="#">Components</MenuItem>
        </MenuContainer>
      </Menu>
    </>
        </NavbarContent>
  
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="warning">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
  
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
  
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
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