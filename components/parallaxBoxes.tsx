"use client"
import { FC, useEffect, useState } from "react";

interface ParallaxBoxesProps {
    
}
const boxes = [
    {
        size: 'w-[20px] h-[50px] lg:w-[150px] lg:h-[105px]',
        position: 'left-[0px] top-[1100px] lg:top-[950px]',
    },
    {
        size: 'w-[70px] h-[50px] lg:w-[200px] lg:h-[139px]',
        position: 'left-1/2 top-[750px] lg:top-[660px]',
    },
    {
        size: 'w-[131px] h-[124px]',
        position: 'right-[198px] top-[1350px]',
    },
    {
        size: 'w-[70px] h-[50px]',
        position: 'left-3/4 top-[1480px] lg:top-[1500px]',
    },
]
const ParallaxBoxes: FC<ParallaxBoxesProps> = () => {
    const [translate, setTranslate] = useState<number>(0)
    useEffect(() => {
        document.addEventListener("scroll", handleParallax);
      }, []);

      function handleParallax(){
        const scrollStartPosition = window.innerHeight/2
        const parallaxSpeedFactor = 5
        if(window.scrollY >= scrollStartPosition){
            setTranslate((window.scrollY - scrollStartPosition)/parallaxSpeedFactor)
        }
      }
    return ( 
        <div className="absolute top-0 h-full w-full z-[0] overflow-hidden"
        style={{transform: `translateY(${translate}px)`}}>
            {boxes.map((box, index)=>{
                return(
                    <div className={`absolute bg-[#E8E8E8] ${box.size} ${box.position}`}
                    >

                    </div>
                )
            })}
        </div>
     );
}
 
export default ParallaxBoxes;