import CeoSection from "./CeoSection";
import Footer2 from "./Footer2";
import TopAndBottomSections from "./TopAnd BottomSection";
import TopContactSection from "./TopContactSection";

function Contact() {
  const englandCeoData = [
    {
      image: "https://tengrain.com/wp-content/uploads/2022/09/Hemant-Chief-Planner-_-Strategist-850x810.jpeg",
      name: "Hemant",
      role: "Founder",
      email: "info@tengrain.com",
      socialLinks: [
        {
          platform: "Facebook",
          url: "https://facebook.com",
          color: "blue",
          icon: "facebook-f",
        },
        {
          platform: "Twitter",
          url: "https://twitter.com",
          color: "blue-400",
          icon: "twitter",
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          color: "blue-700",
          icon: "linkedin-in",
        },
      ],
    },
    {
      image: "https://tengrain.com/wp-content/uploads/2022/09/ravi-850x810.jpg",
      name: "Ravi",
      role: "CEO",
      email: "info@tengrain.com",
      socialLinks: [
        {
          platform: "Facebook",
          url: "https://facebook.com",
          color: "blue",
          icon: "facebook-f",
        },
        {
          platform: "Twitter",
          url: "https://twitter.com",
          color: "blue-400",
          icon: "twitter",
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          color: "blue-700",
          icon: "linkedin-in",
        },
      ],
    },
  ];

  const indiaCeoData = [
    {
      image: "https://tengrain.com/wp-content/uploads/2022/09/pic-1.jpg",
      name: "Jitendra",
      role: "Programme Lead",
      email: "jitendra.singh@tengrain.com",
      socialLinks: [
        {
          platform: "Facebook",
          url: "https://facebook.com",
          color: "blue",
          icon: "facebook-f",
        },
        {
          platform: "Twitter",
          url: "https://twitter.com",
          color: "blue-400",
          icon: "twitter",
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          color: "blue-700",
          icon: "linkedin-in",
        },
      ],
    },
    {
      image: "https://tengrain.com/wp-content/uploads/2022/09/pic.jpg",
      name: "Aditya",
      role: "Coordinator",
      email: "aditya.dharamraj@tengrain.com",
      socialLinks: [
        {
          platform: "Facebook",
          url: "https://facebook.com",
          color: "blue",
          icon: "facebook-f",
        },
        {
          platform: "Twitter",
          url: "https://twitter.com",
          color: "blue-400",
          icon: "twitter",
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          color: "blue-700",
          icon: "linkedin-in",
        },
      ],
    },
    
    // Add more CEOs for India if needed
  ];

  const africaCeoData = [
    {
      image: "https://tengrain.com/wp-content/uploads/2022/09/pic-2-1.png",
      name: "Patrick Robis",
      role: "Worker",
      email: "info@tengrain.com",
      socialLinks: [
        {
          platform: "Facebook",
          url: "https://facebook.com",
          color: "blue",
          icon: "facebook-f",
        },
        {
          platform: "Twitter",
          url: "https://twitter.com",
          color: "blue-400",
          icon: "twitter",
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com",
          color: "blue-700",
          icon: "linkedin-in",
        },
      ],
    },
   
    // Add more CEOs for Africa if needed
  ];
  return (
    <div>
      <TopContactSection />
      <TopAndBottomSections />
    
      <CeoSection
        flagSrc="https://flagcdn.com/w320/gb.png"
        ceoData={englandCeoData}
      />


      <CeoSection
        flagSrc="https://flagcdn.com/w320/in.png"
        ceoData={indiaCeoData}
      />

      <CeoSection
        flagSrc="https://flagcdn.com/w320/za.png"
        ceoData={africaCeoData}
      />

      <Footer2 />
    </div>
  );
}

export default Contact;
