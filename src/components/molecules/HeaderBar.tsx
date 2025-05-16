import * as React from "react";
import { ThemeSwitch } from "../organisms/ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function HeaderBar() {
  return (
    <div className="place-content-between items-center flex flex-row w-full px-4 py-2">
      <Link href={"/"} className="flex flex-row items-center">
        <Avatar>
          <AvatarImage
            src="/images/fotoProfile-2.jpg"
            className="object-cover scale-150"
          />
          <AvatarFallback className="bg-gray-600/50">SI</AvatarFallback>
        </Avatar>
        <h1 className="pl-4">Sirajul Ilmi</h1>
      </Link>

      <ThemeSwitch />
    </div>
  );
}
