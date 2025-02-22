// import { useState } from "react";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeItem, setActiveItem] = useState(null);

//     const handleItemClick = (item) => {
//         setActiveItem(item);
//     };


//     return (
//         <nav className="bg-white text-black fixed top-0 left-0 w-full shadow-md z-50">
//             <div className="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     <div className="text-xl font-bold">CodeCrept</div>
//                     <ul className="hidden md:flex space-x-11 font-bold">
//                         <li><a href="#" className="hover:text-gray-600">Home</a></li>
//                         <li><a href="#" className="hover:text-gray-600">About Us</a></li>
//                         <li><a href="#" className="hover:text-gray-600">Services</a></li>
//                         <li><a href="#" className="hover:text-gray-600">Contact Us</a></li>
//                         <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
//                     </ul>
//                     <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 font-bold">Purchase Now</button>
//                     <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
//                         ☰
//                     </button>
//                 </div>
//             </div>
//             {isOpen && (
//                 // <div className="md:hidden bg-white p-4 text-black">
//                 //     <ul className="space-y-2">
//                 //         <li><a href="#" className="block text-black hover:text-gray-600 font-bold">Home</a></li>
//                 //         <li><a href="#" className="block text-black hover:text-gray-600 font-bold">About Us</a></li>
//                 //         <li><a href="#" className="block text-black hover:text-gray-600 font-bold">Services</a></li>
//                 //         <li><a href="#" className="block text-black hover:text-gray-600 font-bold">Contact Us</a></li>
//                 //         <li><a href="#" className="block text-black hover:text-gray-600 font-bold">FAQ</a></li>
//                 //     </ul>
//                 // </div>


//                 <div className="md:hidden bg-white p-4 text-black">
//             <ul className="space-y-2">
//                 <li>
//                     <a
//                         href="#"
//                         onClick={() => handleItemClick("home")}
//                         className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                             activeItem === "home" 
//                                 ? "border-b-2 bg-gray-100" 
//                                 : ""
//                         }`}
//                     >
//                         Home
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="#"
//                         onClick={() => handleItemClick("about")}
//                         className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                             activeItem === "about" 
//                                 ? "border-b-2 bg-gray-100" 
//                                 : ""
//                         }`}
//                     >
//                         About Us
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="#"
//                         onClick={() => handleItemClick("services")}
//                         className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                             activeItem === "services" 
//                                 ? "border-b-2 bg-gray-100" 
//                                 : ""
//                         }`}
//                     >
//                         Services
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="#"
//                         onClick={() => handleItemClick("contact")}
//                         className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                             activeItem === "contact" 
//                                 ? "border-b-2 bg-gray-100" 
//                                 : ""
//                         }`}
//                     >
//                         Contact Us
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="#"
//                         onClick={() => handleItemClick("faq")}
//                         className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                             activeItem === "faq" 
//                                 ? "border-b-2  bg-gray-100" 
//                                 : ""
//                         }`}
//                     >
//                         FAQ
//                     </a>
//                 </li>
//             </ul>
//         </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



// import { useState } from "react";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeItem, setActiveItem] = useState(null);

//     const handleItemClick = (item) => {
//         setActiveItem(item);
//     };

//     return (
//         <nav className="bg-white text-black fixed top-0 left-0 w-full shadow-md z-50">
//             <div className="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     <div className="text-xl font-bold">Code<span className="text-orange-500">Crept</span></div>
//                     <ul className="hidden md:flex space-x-11 font-bold">
//                         <li><a href="#" className="hover:text-gray-600">Home</a></li>
//                         <li><a href="#Aboutus" className="hover:text-gray-600">About Us</a></li>
//                         <li><a href="#Services" className="hover:text-gray-600">Services</a></li>
//                         <li><a href="#" className="hover:text-gray-600">Contact Us</a></li>
//                         <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
//                     </ul>
//                     <button  className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 font-bold">Purchase Now</button>
//                     <button 
//                         className="md:hidden text-white focus:outline-none bg-orange-500 p-3 rounded-3xl hover:bg-orange-600 transition-colors duration-300"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         ☰
//                     </button>
//                 </div>
//             </div>
//             {isOpen && (
//                 <div className="md:hidden bg-white p-4 text-black">
//                     <ul className="space-y-2">
//                         <li>
//                             <a
//                                 href="#"
//                                 onClick={() => handleItemClick("home")}
//                                 className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                                     activeItem === "home"
//                                         ? "border-b-2 bg-gray-100"
//                                         : ""
//                                 }`}
//                             >
//                                 Home
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#"
//                                 onClick={() => handleItemClick("about")}
//                                 className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                                     activeItem === "about"
//                                         ? "border-b-2 bg-gray-100"
//                                         : ""
//                                 }`}
//                             >
//                                 About Us
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#"
//                                 onClick={() => handleItemClick("services")}
//                                 className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                                     activeItem === "services"
//                                         ? "border-b-2 bg-gray-100"
//                                         : ""
//                                 }`}
//                             >
//                                 Services
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#"
//                                 onClick={() => handleItemClick("contact")}
//                                 className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                                     activeItem === "contact"
//                                         ? "border-b-2 bg-gray-100"
//                                         : ""
//                                 }`}
//                             >
//                                 Contact Us
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 href="#"
//                                 onClick={() => handleItemClick("faq")}
//                                 className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${
//                                     activeItem === "faq"
//                                         ? "border-b-2  bg-gray-100"
//                                         : ""
//                                 }`}
//                             >
//                                 FAQ
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const scrollToContactUs = () => {
        const contactSection = document.getElementById("ContactUs");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-white text-black fixed top-0 left-0 w-full shadow-md z-50">
            <div className="max-w-7xl mx-auto my-2 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold">Code<span className="text-orange-500">Crest</span></div>
                    <ul className="hidden md:flex space-x-11 font-bold">
                        <li><a href="#" className="hover:text-gray-600">Home</a></li>
                        <li><a href="#Aboutus" className="hover:text-gray-600">About Us</a></li>
                        <li><a href="#Services" className="hover:text-gray-600">Services</a></li>
                        <li><a href="#ContactUs" className="hover:text-gray-600">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
                    </ul>
                    <button 
                        onClick={scrollToContactUs}
                        className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 font-bold"
                    >
                        Purchase Now
                    </button>
                    <button 
                        className="md:hidden text-white focus:outline-none bg-orange-500 p-3 rounded-3xl hover:bg-orange-600 transition-colors duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white p-4 text-black">
                    <ul className="space-y-2">
                        <li><a href="#" onClick={() => handleItemClick("home")} className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${activeItem === "home" ? "border-b-2 bg-gray-100" : ""}`}>Home</a></li>
                        <li><a href="#Aboutus" onClick={() => handleItemClick("about")} className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${activeItem === "about" ? "border-b-2 bg-gray-100" : ""}`}>About Us</a></li>
                        <li><a href="#Services" onClick={() => handleItemClick("services")} className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${activeItem === "services" ? "border-b-2 bg-gray-100" : ""}`}>Services</a></li>
                        <li><a href="#ContactUs" onClick={() => handleItemClick("contact")} className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${activeItem === "contact" ? "border-b-2 bg-gray-100" : ""}`}>Contact Us</a></li>
                        <li><a href="#FAQ" onClick={() => handleItemClick("faq")} className={`block text-black hover:text-gray-600 font-bold py-2 px-4 ${activeItem === "faq" ? "border-b-2 bg-gray-100" : ""}`}>FAQ</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
