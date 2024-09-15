import React from 'react';

// Define types for social links and CEO data
interface SocialLink {
  platform: string;
  url: string;
  color: string;
  icon: string;
}

interface Ceo {
  image: string;
  name: string;
  role: string;
  email: string;
  socialLinks: SocialLink[];
}

interface CardProps {
  image: string;
  name: string;
  role: string;
  email: string;
  socialLinks: SocialLink[];
}

interface CeoSectionProps {
  flagSrc: string;
  ceoData: Ceo[];
}

const Card: React.FC<CardProps> = ({ image, name, role, email, socialLinks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      {/* Image */}
      <img
        src={image}
        alt={`${name} Image`}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      {/* Gray Line */}
      <div className="w-full h-1 bg-gray-300 my-4"></div>
      {/* CEO/Founder Details */}
      <p className="text-xl font-semibold mb-2">{name}</p>
      <p className="text-lg text-gray-600 mb-4">{role}</p>
      {/* Email ID */}
      <p className="text-lg font-semibold mb-4">{email}</p>
      {/* Social Media Buttons */}
      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative flex items-center justify-center w-12 h-12 bg-${link.color}-600 rounded-full text-white hover:bg-${link.color}-700 transition-all duration-300`}
          >
            <span className="sr-only">{link.platform}</span>
            <i className={`fab fa-${link.icon} text-xl`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

const CeoSection: React.FC<CeoSectionProps> = ({ flagSrc, ceoData }) => {
  return (
    <section className="relative w-full h-auto bg-gray-100 py-8 px-4">
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Left Section - Flag */}
        <div className="w-full md:w-1/3 flex justify-center items-center mt-32 mb-8 md:mb-0">
          <img
            src={flagSrc}
            alt="Country Flag"
            className="w-62 h-34 object-cover"
          />
        </div>

        {/* Right Section - Cards */}
        <div className="w-full md:w-2/4 flex flex-col md:flex-row gap-8">
          {ceoData.map((ceo, index) => (
            <Card
              key={index}
              image={ceo.image}
              name={ceo.name}
              role={ceo.role}
              email={ceo.email}
              socialLinks={ceo.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
