import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Mysidebar from "./MySidebar";

export function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9998 14.6667H20.3332M1.6665 8.00001H20.3332M1.6665 1.33334H20.3332"
            stroke="black"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </SheetTrigger>
      <SheetContent side="left">
        <div>
          <Mysidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
