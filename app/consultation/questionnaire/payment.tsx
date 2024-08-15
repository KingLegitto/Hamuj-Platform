"use client"
import Toast from "@/components/toast";
import { AnimatePresence } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";

interface PaymentProps {
    email: string;
    setPage: (page: any)=>void
}
const Payment: FC<PaymentProps> = ({ email, setPage }) => {
  const [toast, setToast] = useState<boolean>(false)
  const [toastDetails, setToastDetails] = useState({title: '', result: false, message: ''})
  const paymentConfig = {
    email: email,
    amount: 70000*100,
    publicKey: "pk_test_749c3e1a8f019e306e1f78d65d3438dcab7c0006",
    text: "Pay Now",
    onSuccess: () =>
      setPage('sending'),
    onClose: () => (
      setToast(true),
    setToastDetails({title: 'Unsuccessful', result: false, message: 'Transaction terminated' })
  ),
  };

  useEffect(() => {
    let scrollAnchor: HTMLHeadingElement = document.querySelector(".target")!;
    scrollAnchor.scrollIntoView({ block: "center", inline: "nearest" });
  }, []);

  return (
    <section className="target relative mx-auto bg-white border-[3px] lg:border-[5px] border-white text-sm md:text-base flex flex-col justify-center items-center gap-y-12 rounded-3xl text-grade-3 p-7 py-20 lg:p-16 w-[97%] md:w-[70%] lg:h-[70vh] max-h-[500px] shadow-[inset_5px_5px_0px_6px_#f3f3f3] md:shadow-[inset_9px_9px_0px_10px_#f3f3f3] text-center my-[5rem] md:my-[10rem]">
      <AnimatePresence>
            {toast && <Toast setToast={setToast} toastDetails={toastDetails}/>}
      </AnimatePresence>
      <h2 className="relative font-normal text-lg md:text-xl text-grade-3">
        Proceed with payment
        <div className="h-[3px] lg:h-[5px] w-full lg:w-[150%] absolute bg-[#f3f3f3] -bottom-3 left-1/2 -translate-x-1/2" />
      </h2>

      <button className="absolute top-4 left-4 md:top-7 md:left-7 p-2 border rounded-xl" onClick={()=>{setPage(1)}}>Go back</button>

      <div className="flex flex-col gap-y-7 text-center hyphens-auto md:hyphens-none leading-[25px]">
        <span>
          To finalise your consultation request you will be charged a
          consultation fee of: <br /><span className="font-normal">₦70,000 (Seventy thousand naira)</span>.
        </span>

          {(typeof window !== 'undefined') && <PaystackButton {...paymentConfig} 
          className="text-center py-2 px-4 hover:scale-[1.05] duration-150 w-fit mx-auto rounded-lg bg-theme-1 text-white font-normal" />}
      </div>
    </section>
  );
};

export default Payment;
