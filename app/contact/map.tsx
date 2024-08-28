'use client'

const Map = () => {
  return (
    <div className="relative w-full h-60 lg:flex-grow flex justify-center items-center overflow-hidden bg-[#E8E8E8] rounded-2xl">
      <span className=" animate-pulse">Loading map...</span>
      <iframe
        className="absolute border-[5px] border-[#e8e8e8] w-full h-60 md:h-full rounded-2xl"
        id="gmap_canvas"
        allow="geolocation"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=hamuj%20homes%20Adetokunbo%20Ademola%20Street%20Lagos+(hamuj%20homes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      />
    </div>
  );
};

export default Map;
