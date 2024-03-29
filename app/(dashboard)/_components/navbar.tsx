import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BellDot, Filter, LucideSettings2, Search, UserCircle2 } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Locations } from "./locations";
import { Button } from "@/components/ui/button";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export const NavBar = () => {
  return (
    <header className=" bg-transparent">
      <div className="p-3  flex justify-between items-center gap-x-3 bg-blue-700 rounded-b-3xl">
        <div className="hidden sm:flex items-center flex-shrink-0  gap-x-2 ">
          {/* <Image
            className="h-8 md:h-10"
            src="/logo.png"
            alt=""
            width={80}
            height={80}
          /> */}
          <span className={cn("font-semibold text-2xl text-white", PoppinsFont.className)}>
            TableUp
          </span>
        </div>

        <div className="lg:max-w-3xl xl:max-w-3xl 2xl:max-w-2xl  bg-blue-500 rounded-md flex items-center xs:p-2 py-1 px-2 xs:flex-col xs:items-start xs:w-full md:w-3/5 ">
        <div className="flex items-center gap-x-1">
          <Image
            src="/location.png"
            alt=""
            width={10}
            height={10}
            className="mr-[-15px] w-3 h-3 md:w-5 md:h-5"
          />
          <Locations />
          </div>
          <div className="w-full relative flex flex-row justify-between my-2 gap-x-3">
            <div className="flex flex-row w-full">
            <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-muted-foreground" />
            <Input
              // onChange={} handle changes
              className="w-full max-w[510px] pl-9"
              placeholder="Restaurents.."
            />
            </div>
          <div>
            <Button variant="ghost" className="opacity-70 hover:opacity-100 bg-white rounded-lg"><LucideSettings2 color="blue" /></Button>
          </div>
          <div>
            <Button variant="ghost" className="bg-blue-400 hover:bg-blue-500"><BellDot className="h-5 w-5"  /></Button>
          </div>
     
          </div>
        </div>

        {/* <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
      <span className="font-bold md:text-xl">8 800 332 65-66</span>
      <span className="font-semibold text-sm text-gray-400">Support 24/7</span>
    </div> */}

        <div className="hidden sm:flex">
          <UserCircle2 size={40} color="white" />
        </div>
      </div>
    </header>
  );
};
