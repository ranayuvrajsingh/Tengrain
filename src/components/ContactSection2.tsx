const ContactSection2 = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-green-50 py-24 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section with Form */}
        <div className="md:w-1/2 flex justify-end  mr-48  -ml-32">
          <img
            loading="lazy"
            decoding="async"
            width="740"
            height="1280"
            src="https://tengrain.com/wp-content/uploads/2020/09/inner_image_04.jpg"
            className="attachment-boldthemes_large_vertical_rectangle size-boldthemes_large_vertical_rectangle"
            alt="https://tengrain.com/wp-content/uploads/2020/09/inner_image_04.jpg"
            data-full_image_src="https://tengrain.com/wp-content/uploads/2022/09/biologist.jpg"
            title="biologist"
          />
        </div>

        {/* Right Section with Image */}

        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl font-bold text-[#1C4837] leading-tight">
            Let's work together
          </h2>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-3 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 border border-gray-300 rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-lg font-semibold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="p-3 border border-gray-300 rounded-lg"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button className="relative px-6 py-3 font-semibold text-green-600 border-2 border-green-600 rounded-md overflow-hidden group hover:bg-green-600 transition-all duration-300">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                SEND MESSAGE
              </span>
              <span className="absolute inset-0 w-full h-full bg-green-600 transform scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection2;
