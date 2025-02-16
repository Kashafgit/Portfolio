import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-transperent text-white py-6 mt-52 md:mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
      

        {/* Left Section - Copyright */}
        <p className="text-sm">© {new Date().getFullYear()} Kashaf. All rights reserved.</p>
        
        {/* Center - Navigation Links */}
        <div className="flex gap-6 text-sm mt-3 md:mt-0">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/skills" className="hover:text-gray-400">Skills</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-4 text-xl mt-3 md:mt-0">
          <a href="https://github.com/Kashafgit" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kashaf-akram-b26b61277" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61553826722345" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook />
          </a>
        </div>

      </div>
    </footer>
  );
}
