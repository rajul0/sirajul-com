import * as React from "react";
import { ThemeSwitch } from "../organisms/ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MY_PROFILE } from "@/data";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function HeaderBar() {
  return (
    <div className="place-content-between items-center flex flex-row w-full px-4 py-2">
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex flex-row items-center focus:outline-none">
            <Avatar>
              <AvatarImage
                src={MY_PROFILE.avatar}
                className="object-cover scale-150"
              />
              <AvatarFallback className="bg-gray-600/50">SI</AvatarFallback>
            </Avatar>
            <h1 className="pl-4">{MY_PROFILE.name}</h1>
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-64 bg-white dark:bg-[#0f172a]">
          <div className="space-y-2">
            <div>
              <h4 className="text-lg font-medium">{MY_PROFILE.name}</h4>
              <p className="text-sm text-muted-foreground">
                {MY_PROFILE.email}
              </p>
            </div>

            <div className="text-sm space-y-1">
              <p>
                <a
                  href={MY_PROFILE.linkedin}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                &nbsp;&nbsp;
                <a
                  href={MY_PROFILE.github}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
              <p>
                <strong>Hobbies:</strong> {MY_PROFILE.hobbies.join(", ")}
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <ThemeSwitch />
    </div>
  );
}
