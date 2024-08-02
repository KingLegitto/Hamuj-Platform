"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface TransitionLinkProps {
  href: string;
  styles: string;
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
  function transition(e: any) {
    e.preventDefault();
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
  return (
    <Link
      href={href}
      className={styles}
      onClick={(e) => {
        transition(e);
      }}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
