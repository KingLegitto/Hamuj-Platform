"use client"
import { FC, useEffect, useState } from "react";

interface LocalisationProps {
    content: 'whatsapp' | 'address'
}
 
const Localisation: FC<LocalisationProps> = ({content}) => {
    const [region, setRegion] = useState<string | null>()

    useEffect(()=>{
        setTimeout(() => {
          setRegion(sessionStorage.getItem("region"))
        }, 1000);
      }, [])

    function localise(){
        if(content === 'whatsapp'){
            if(region === 'GB'){
                return '+44 7786367911'
            }
            else{
                return '+234 8061999995'
            }
        }

        if(content === 'address'){
            if(region === 'GB'){
                return '85, Great Portland Street, First Floor, London England'
            }
            else{
                return '1637, Ibukun House Ademola Adetokunbo, Opposite Eko Hotel, Victoria Island, Lagos, Nigeria'
            }
        }
    }
    return ( 
        <>{localise()}</>
     );
}
 
export default Localisation;