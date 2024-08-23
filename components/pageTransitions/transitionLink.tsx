"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface TransitionLinkProps {
  href: string;
  styles?: string;
  children: React.ReactNode;
  goBack?: boolean
  setMenuIsVisible?: (menuIsVisible:boolean)=>void
}

const TransitionLink: FC<TransitionLinkProps> = ({
  href,
  styles,
  children,
  goBack,
  setMenuIsVisible,
}) => {
  const router = useRouter();
  const pathname = usePathname()
  const [clientSide, setClientSide] = useState<boolean>(false)
  
  function transition(e: any) {
    e.preventDefault();
    
    if(href === pathname) return
    if(setMenuIsVisible){setMenuIsVisible(false)}

    const preloader: HTMLDivElement = document.querySelector(".preloader")!;
    preloader.style.display = "block";
    setTimeout(() => {
      preloader.style.transition = "0.3s";
      preloader.style.opacity = "1";
      setTimeout(() => {
        if(goBack){router.back()}
        else{router.push(href);}
      }, 300);
    }, 100);
  }

  useEffect(()=>{
    setClientSide(true)
  },[])

  return (
    <Link
      href={href}
      className={styles? styles:''}
      onClick={clientSide? (
        (e) => {transition(e)}
      ) : (
        ()=>{/* Don't activate transition linking if not on the client side */}
      )}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
