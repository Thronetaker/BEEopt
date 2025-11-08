import React from "react";

const Hero = ()=> {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick-started BEEopt on 15th Octber 2025 with a vision to make
            Electrical Engineering calculations simpler, faster, and smarter.
            Our goal is to break all barriers that students and professionals 
            face while solving Basic Electrical Engineering (BEE) problems —
            whether in terms of accuracy, accessibility, or automation.
            The name BEEopt comes from “BEE” and “Optimize”, symbolizing 
            our mission to optimize electrical computations for everyone.
          </p>
          <p>
            Today, our innovative automation model and in-house computational engine have
            made BEEopt one of the most reliable and efficient BEE simulation
            platforms for students and engineers alike.
          </p>
          <p>
            Over 10,000+ users have already performed thousands of BEE calculations
             and simulations through our powerful BEEopt ecosystem, simplifying 
             complex electrical concepts and saving valuable time in labs and classrooms.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;