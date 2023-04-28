import { Link } from "react-scroll"

const Header = () => {
  return (
    <div className="flex items-center justify-between mx-5 px-5 mt-5 pb-10 border-b-4 border-black">
        <h1 className="text-primary font-extrabold text-4xl cursor-pointer">REMINE</h1>
        <ul className="flex text-xl gap-10">
        <Link className="cursor-pointer" to="who" spy={true} smooth={true} offset={-100} duration={500}>Who?</Link>
        <Link className="cursor-pointer" to="partner" spy={true} smooth={true} offset={-100} duration={500}>Partners</Link>
        <Link className="cursor-pointer" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>

        </ul>
    </div>
  )
}

export default Header