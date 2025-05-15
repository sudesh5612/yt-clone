
import React, { useEffect, useState } from "react";
import { IoBus } from 'react-icons/io5';
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../public/Logo.png"
import Profile from "../../public/Profile.jpeg"
import { useNavigate } from "react-router-dom";
import { useUtils } from "../Context/UtilsContext";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const {isSidebar,setIsSidebar,mobileShow,setMobileShow} =useUtils();
  
  const[searchbar,setSearchbar]=useState(false);
  const navigate = useNavigate();
  useEffect[()=>{
     console.log({isSidebar,mobileShow});
  },[isSidebar]];
  // Handle the window resize event
  

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  // Handle sidebar toggle
  const handleSidebar = () => {
    if (window.innerWidth<=1280) {
      // If on mobile or tablet-sized screen
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } 
      // If on larger screens (desktop/laptop)
      setIsSidebar(!isSidebar);
  };
  
  if(searchbar){
    return(
      <div className="flex items-center fixed top-0 w-full bg-white px-2 py-2 z-10">
  
  {/* Back Arrow */}
  <div className="flex-shrink-0">
    <IoArrowBack
      size={24}
      className="text-gray-700 cursor-pointer"
      onClick={() => setSearchbar(!searchbar)}
    />
  </div>

  {/* Search input, search button, mic */}
  <div className="flex items-center flex-grow ml-2 bg-white border border-gray-400 rounded-full px-2 overflow-hidden">
    <input
      type="text"
      placeholder="Search"
      className="flex-grow outline-none px-2 py-1"
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyUp={searchQueryHandler}
      value={searchQuery}
    />
    <button
      className="p-1 hover:bg-gray-100 rounded-full"
      onClick={() => searchQueryHandler("searchButton")}
    >
      <CiSearch size={24} />
    </button>
    <IoMdMic
      size={24}
      className="ml-2 p-1 border border-gray-400 rounded-full cursor-pointer hover:bg-gray-200 duration-200"
    />
  </div>

</div>

   )
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 ">
    <div className="flex items-center mid:space-x-4  ">
    <AiOutlineMenu className="text-2xl cursor-pointer" onClick={handleSidebar} />
      <img src={Logo} alt="" className=" w-28 mid:w-24 cursor-pointer" />
      </div>
      <div className="hidden md:flex w-[35%] items-center ">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex  space-x-5 items-center ">
        <IoIosSearch className="text-2xl md:hidden" onClick={()=>setSearchbar(!searchbar)} />
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <img src={Profile} className="w-5 rounded-full" />
      </div>
     </div>
  );
}

export default Navbar;
