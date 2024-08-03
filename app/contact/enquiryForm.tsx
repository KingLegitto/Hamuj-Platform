const EnquiryForm = () => {
    return ( 
        <form className="hidden md:flex flex-col gap-y-20 text-lg font-normal pr-20">
          <input
            type="text"
            placeholder="Name"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="email"
            placeholder="Email"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="text"
            placeholder="Phone"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <textarea
            rows={4}
            placeholder="Enquiry"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="submit"
            value={"Send Enquiry"}
            className="bg-theme-1 text-white py-3 w-1/3 font-medium"
          />
        </form>
     );
}
 
export default EnquiryForm;