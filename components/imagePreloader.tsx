import Image from "next/image";
import { FC } from "react";
import Logo from '../assets/rasters/Hamuj_homes_logo.png'
import {motion} from 'framer-motion'


interface ImagePreloaderProps {
    size?: string
}
 
const ImagePreloader: FC<ImagePreloaderProps> = ({size}) => {
    return ( 
        <motion.div exit={{opacity: 0, transition:{duration: 1}}} className={`bg-[#e8e8e8] animate-pulse w-full h-full relative cursor-wait ${size? size:''}`}>
            <Image src={Logo} alt="logo" className="absolute opacity-30 w-1/3 aspect-square  -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"/>
        </motion.div>
     );
}
 
export default ImagePreloader;