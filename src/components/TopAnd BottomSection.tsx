const TopAndBottomSections = () => {
  return (
    <div className="w-full">
      {/* Top Section */}
      <section className="relative w-full h-auto mb-8">
        {/* Container for Flex Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full  md:w-1/2 bg-green-800 text-white py-12 px-6 md:px-12 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl mb-8">
              How can we help your business to grow?
            </p>
            <br />
            <br />
            <p className="text-2xl mb-4">
            <strong>Call Us:</strong> +44 786 203 1265
          </p>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-gray-800 py-12 px-6 md:px-12 flex flex-col items-center">
            {/* Contact Form */}
            <form className="w-full max-w-lg bg-gray-700 p-6 rounded-lg shadow-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone number*</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                SEND A MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="relative w-full h-auto bg-gray-100 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4">
        {/* Address Column */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Address</h2>
          <p className="text-lg">
            Suite 2, 7th Floor, 60 Charles Street, Leicester, United Kingdom LE1 1FB
          </p>
        </div>
        
        {/* Social Media Column */}
        <div className="w-full md:w-1/2 flex justify-end md:justify-end space-x-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white  hover:bg-green-600 transition-all duration-300"
          >
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full text-white  hover:bg-green-600 transition-all duration-300"
          >
            <span className="sr-only">Twitter</span>
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full text-white  hover:bg-green-600 transition-all duration-300"
          >
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TopAndBottomSections;
