import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
     
        <div>
          <Link href={"/"} className="text-3xl font-bold">Kashaf.</Link>
        </div>

      
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="text-white w-7 h-7" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white">
            <div className="flex flex-col gap-5 text-lg p-5">
              <Link href="/" className="hover:text-gray-400">Home</Link>
              <Link href="/about" className="hover:text-gray-400">About</Link>
              <Link href="/projects" className="hover:text-gray-400">Projects</Link>
              <Link href="/skills" className="hover:text-gray-400">Skills</Link>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/skills" className="hover:text-gray-400">Skills</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
