import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
     
              <Link href="/">
                <h2><span className="bg-indigo-500 text-white rounded-md px-1 py-1 ">Gym</span>baran</h2>
              </Link>
   
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="text-black-300   px-6 py-2  text-m">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-black-300   px-6 py-2  text-m">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Program
                  </Link>
                </li>
                <li className="text-black-300   px-6 py-2  text-m">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className="text-black-300   px-6 py-2  text-m">
                  <Link className='text-center' href="#projects" onClick={() => setNavbar(!navbar)}>
                    About us
                  </Link>
                </li>
                <li>
                <Link href="#" class="bg-blue-900 text-white px-6 py-2 rounded-md text-m font-medium" aria-current="page">Log in</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}