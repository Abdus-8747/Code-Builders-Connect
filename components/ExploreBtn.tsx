'use client';

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button 
    onClick={() => console.log("clicked")}
    type="button"
    id="explore-btn"
    className="mx-auto mt-7">
     <a href="#events"> Explore</a>
     <Image src="/icons/arrow-down.svg" alt="down arrow" width={24} height={24} className="inline-block ml-2"/>
    </button>
  )
}

export default ExploreBtn
