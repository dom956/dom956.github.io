import { useState, useEffect } from "react";

function Footer() {
  
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430); 
    };

    
    handleResize();

    
    window.addEventListener("resize", handleResize);

    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Default footer style (for larger screens)
  const style = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    marginTop: "auto",
  };

  // Mobile-specific footer style (fixed at bottom of the screen)
  const mobileStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    position: "relative",
    bottom: 0, // Aligns to the bottom of the screen
    left: 0,// Spans across the entire screen
  };

  return (
    <div style={isMobile ? mobileStyle : style}>
      <p>All Rights Reserved</p>
      &copy; {new Date().getFullYear()} Scorpion Cobra Studio
    </div>
  );
}

export default Footer;
