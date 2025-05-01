import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FiHome,
  FiUser,
  FiPhone,
  FiCoffee,
  FiMessageSquare,
} from "react-icons/fi";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row place-content-around">
        <NavigationMenuItem className="py-2 md:py-1 btn-navbar dark:btn-navbar-dark">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-row ${navigationMenuTriggerStyle()}`}
            >
              <FiHome className="place-self-center text-[20px] md:text-[16px] mr-0 md:mr-2 rotate-animation" />
              <p className="hidden md:block">Home</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 md:py-1 btn-navbar dark:btn-navbar-dark">
          <Link href="/my-project" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-row ${navigationMenuTriggerStyle()}`}
            >
              <FiCoffee className="place-self-center text-[20px] md:text-[16px] mr-0 md:mr-2 rotate-animation" />
              <p className="hidden md:block">Project</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 md:py-1 btn-navbar dark:btn-navbar-dark">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-row ${navigationMenuTriggerStyle()}`}
            >
              <FiPhone className="place-self-center text-[20px] md:text-[16px] mr-0 md:mr-2 rotate-animation" />
              <p className="hidden md:block">Contact</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 md:py-1 btn-navbar dark:btn-navbar-dark">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-row ${navigationMenuTriggerStyle()}`}
            >
              <FiUser className="place-self-center text-[20px] md:text-[16px] mr-0 md:mr-2 rotate-animation" />
              <p className="hidden md:block">About</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 md:py-1 btn-navbar dark:btn-navbar-dark">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`flex flex-row ${navigationMenuTriggerStyle()}`}
            >
              <FiMessageSquare className="place-self-center text-[20px] md:text-[16px] mr-0 md:mr-2 rotate-animation" />
              <p className="hidden md:block">Chat Room</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
