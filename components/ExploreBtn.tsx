'use client';

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <a href="#events" className="scroll-smooth">
    <button 
    onClick={() => console.log("clicked")}
    type="button"
    id="explore-btn"
    className="mx-auto mt-7">
     Explore
     <Image src="/icons/arrow-down.svg" alt="down arrow" width={24} height={24} className="inline-block ml-2"/>
    </button>
    </a>
  )
}

export default ExploreBtn
