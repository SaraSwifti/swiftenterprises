
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./SwiftLogoSimpleWhite.png";

const navigation = [
  { name: "About", href: "/" },
  { name: "Direct Cells", href: "/directcells" },
  { name: "Renewable Fuels", href: "/renewablefuel" },
  { name: "Research", href: "/research" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" bg-gray-800 sticky top-0 z-30 p-5">
      <div className="  md:flex md:items-center md:justify-between font-bold text-white">
      
          <a href="/">
            <img
              alt="Swift Industries logo"
              src={Logo}
              width="150em"
              height="150em"
            ></img>
            <h4 className="text-green-500">Clean Efficient Renewable</h4>
        </a>
        <nav>
    
      {/* //this is the hamburger button// */}
      <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
      </div>
      <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-white">
                  {item.name}
                </a>
              ))}
            <a
                href="/investorsignin"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ring-1 ring-white"
              >
                Investor Sign In  
              </a>
            </div>
            
            
         
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-30 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
              <div className="flex">
              <a href="/">
            <img
              alt="Swift Industries logo"
              src={Logo}
              width="150em"
              height="150em"
            ></img></a>
            <h4 className="text-green-800">Clean Efficient Renewable</h4>
          
                 
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/investorsignin"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Investor Sign In
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        
      </div>
      
    </div>
  );
}
