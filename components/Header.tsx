
import Link from "next/link";

function Header() {
  return (
    // <h1>I am a header</h1>
    <header className="flex justify-between  p-5 max-w-7xl mx-auto ">
        <div className="flex items-center space-x-5 ">
          <Link href="/">
             <img className="w-44 object-contain cursor-pointer" src="https://i.ibb.co/9cCg9mX/logo-crop.png" alt="logo-crop" />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5 ">
              <h3 className="cursor-pointer">About</h3>
              
          </div>
        </div>

        <div className="flex items-center space-x-5  text-green-600">
             
             <h3 className="border px-4 py-1 rounded-full border-green-600 cursor-pointer">
                 Contact
             </h3>
        </div>
    </header>
  )
}

export default Header;