import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import logo from "../assets/HarshithkirthiLogo.png"
import { FaSquareXTwitter } from 'react-icons/fa6'
const Navbar = () => {
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 py-8">
        <div className="flex justify-between w-full h-12 max-w-[1500px] mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
            <a href="#hero" aria-label="Hero">
                <img src={logo} className="mx-2" width={50} height={33} 
                alt="Logo" />
            </a>
        
        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-8 text-stone-300 font-medium text-sm tracking-wide">
        <a href="#experience" className="hover:text-white transition">Experience</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#education" className="hover:text-white transition">Education</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/harshithkirthi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin />
            </a>
            <a href="https://github.com/Harshith-kirthi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub />
            </a>
            <a href="https://x.com/Harshith_kirthi "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                    <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/harshith.kirthi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                    <FaInstagram />
            </a>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
