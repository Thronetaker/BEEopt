import React from "react";

const HeroSection = () => {
  return (
    <div className="container p-5 ">
      <div className="row">
          <div className="col text-center">
              <img src="media/images/bee1.jpg" alt="Hero Img"  className="  w-60 mb-5" style={{height:"300px", width:"500px"}} />
              <h1 className="mt-5">Powering Innovation, Brightening Lives</h1>
              <p>We provide reliable, safe, and efficient electrical solutions for homes, businesses, and industries. From installations to smart automation, we ensure quality you can trust.</p>
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
