import * as React from "react";
import { ThemeSwitch } from "../organisms/ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeaderBar() {
  return (
    <div className="place-content-between items-center flex flex-row w-full px-4 py-2">
      <div className="flex flex-row items-center">
        {/* <div className="w-12 h-12 rounded-full overflow-hidden drop-shadow-lg">
          <Image
            src="/images/fotoProfile-2.jpg"
            alt="Foto Profile"
            width={96} // Tentukan ukuran gambar
            height={96}
            className="object-cover scale-150"
          />
        </div> */}
        <Avatar>
          <AvatarImage
            src="/images/fotoProfile-2.jpg"
            className="object-cover scale-150"
          />
          <AvatarFallback className="bg-gray-600/50">SI</AvatarFallback>
        </Avatar>
        <h1 className="pl-4">Sirajul Ilmi</h1>
      </div>

      <ThemeSwitch />
    </div>
  );
}
