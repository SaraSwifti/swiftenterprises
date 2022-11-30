// import React from "react";
// import { Link } from "react-router-dom";

// const currentDate = new Date();
// const year = currentDate.getFullYear();

// const Footer = () => {
//   return (
//       <footer className=" bg-gray-800 text-white ">
//           <div className="container max-w-6xl mx-auto">
//           <div className="flex  mb-8 items-center space-y-4 text-white Font-bold md:flex-row md:space-y-0 md:ml-3">
//       {/* <div className="w-full h-16 fixed left-0 bottom-0 flex mx-auto justify-between  "> */}
//         {/* <div className="flex flex-col items-center justify-between space-y-4 font-bold md:flex-row md:space-y-0 md:space-x-6"> */}
//           <div className="h-10 group">
//             <a
//               alt="Link to contact through email"
//               href="mailto:john.rusek@swiftenterprises.com; mary.rusek@swiftenterprises.com"
//               rel="noopener noreferrer"
//               target="_blank"
//             >
//               Contact
//             </a>
//            <div className="mx-4 group-hover:border-b
//               group-hover:border-">
                      
//               </div>
//           </div>

       
//         <div className="group">
//           <h3 className="">Swift Enterprises</h3>
//           <h5 className="">Copyright {year}</h5>
//               </div>
//               <div className="h-6 group">
//         <h2 className="">
//           <Link className="link" to="/privacy">
//             Privacy Policy
//           </Link>
//                   </h2>
//                   <div className="mx-4 group-hover:border-b
//               group-hover:border-white"></div>
//                   </div>
//               {/* </div> */}
//                   {/* </div> */}
//               </div>
//           </div>
//     </footer>
//   );
// };
// export default Footer;
import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();



export default function Footer(item) {
  return (
    <footer className="mt-auto bg-gray-500 fixed bottom-0 w-full ">
      <div className="max-w-7xl overflow-hidden py-4 px-4 sm:px-2 lg:px-4">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
         
            <div className="px-5 py-2">
              <a  href="mailto:john.rusek@swiftenterprises.com; mary.rusek@swiftenterprises.com" className="text-base text-white hover:text-gray-900">Contact
              </a>
          </div>
          <div className="px-5 py-2">
              <a href="/privacy" className="text-base text-white hover:text-gray-900"> Privacy Policy </a>
            </div>
         
        </nav>
      
        <p className="mt-8 text-center text-base text-white">&copy; {year} Swift Enterprises, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}