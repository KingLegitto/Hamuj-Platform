import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect } from "react";
import Success from "../assets/vectors/success.svg";
import Fail from "../assets/vectors/fail.svg";
import Deny from "../assets/vectors/warn.svg";
import Image from "next/image";

interface ToastProps {
  toastDetails: { title: string; result: boolean | "deny"; message: string };
  setToast: (toast: boolean) => void;
}

const Toast: FC<ToastProps> = ({ setToast, toastDetails }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setToast(false);
    }, 7000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function toastType(request: 'image' | 'bgColor') {
    if (request === "image" && toastDetails.result) {
      if (toastDetails.result === "deny") {
        return Deny;
      } else {
        return Success;
      }
    } else if (request === "image") {
      return Fail;
    }
    // ///////////////////////////////////////////////////////////////
    if (request === "bgColor" && toastDetails.result) {
      if (toastDetails.result === "deny") {
        return "border-[#FFD233]";
      } else {
        return "border-green-500";
      }
    } else if (request === "bgColor") {
      return "border-red-500";
    }
  }

  return (
    <>
      {/* MOBILE TOAST */}
      <motion.div
        initial={{ x: "-50%", y: "-100%", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0.6 },
        }}
        exit={{ y: "-100%", opacity: 0 }}
        onClick={() => {
          setToast(false);
        }}
        className={`flex md:hidden gap-x-5 items-center fixed z-[89] top-20 left-1/2 rounded-lg w-[90%] md:w-auto md:max-w-[3/4] lg:max-w-1/2 p-5 border-l-[10px] border-[1px] shadow-lg bg-white ${toastType('bgColor')}`}
      >
        <Image
          src={toastType('image')}
          alt="verdict"
          className="object-contain h-full aspect-square"
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold text-grade-3">
            {toastDetails.title}
          </span>
          <span className="text-xs lg:text-sm">{toastDetails.message}</span>
        </div>
      </motion.div>

      {/* PC TOAST */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0.3 },
        }}
        exit={{ x: "100%", opacity: 0 }}
        onClick={() => {
          setToast(false);
        }}
        className={`hidden md:flex cursor-pointer gap-x-7 items-center fixed z-[100] top-24 right-1 left-1/2 w-[90%] md:w-auto md:max-w-[3/4] lg:max-w-1/2 pl-7 h-[120px] rounded-lg bg-white border-l-[10px] border-[1px] shadow-lg ${toastType('bgColor')}`}
      >
        <Image
          src={toastType('image')}
          alt="verdict"
          className="object-contain h-full aspect-square"
        />
        <div className="flex flex-col justify-center">
          <span className="text-lg font-bold text-grade-3">
            {toastDetails.title}
          </span>
          <span className="text-sm lg:text-sm">{toastDetails.message}</span>
        </div>
      </motion.div>
    </>
  );
};

export default Toast;
