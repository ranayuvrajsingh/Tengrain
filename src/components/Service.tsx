import ContactSection2 from "./ContactSection2";
import DropdownMenu2 from "./DropdownMenu2";
import Footer2 from "./Footer2";

function Service() {
  return (
    <>
      <div className="relative w-full h-[70vh]">
        <img
          src="https://tengrain.com/wp-content/uploads/2022/09/New-Project-4-1-2.jpg"
          alt="Top Section Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-bold capitalize text-center p-4 md:p-8">
            Service
          </h1>
        </div>
      </div>
      <div className="mt-40">
        <DropdownMenu2 />
      </div>

      <ContactSection2 />
      <Footer2 />
    </>
  );
}

export default Service;
