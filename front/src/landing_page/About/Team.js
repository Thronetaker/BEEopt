import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Rads.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Radha Parmanand</h4>
          <h6>Web Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Radha created the BEE website as a comprehensive learning resource for Basic 
            Electrical Engineering, transforming her experiences and challenges into a 
            practical platform for students and enthusiasts. Built entirely from scratch, 
            this project showcases Radha’s ability to simplify complex concepts, design
             intuitive tools, and deliver meaningful solutions that support the learning
              journey in electrical engineering.   
          </p>
          <p>
            As a self-motivated college student, Radha independently leads every aspect 
            of development, from architecture to implementation. Her commitment to continuous 
            learning and hands-on exploration is evident in the project’s thoughtful design
            and innovative solutions. Radha thrives on tackling new technologies, and
            her curiosity fuels consistent progress in the field.
          </p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="https://www.linkedin.com/in/radha-parmanand-911b9731b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a> /{" "}
          </p>
        </div>
        <div className="col-6 p-3">
          <p>
            I am Rajnandini Rathore, an enthusiastic and eager-to-learn second-year B.Tech
             Computer Science Engineering student at Banasthali Vidyapith. I have completed 
             my education from Jawahar Navodaya Vidyalaya, Sehore. I am dedicated to 
             continuously enhancing my skills and knowledge in computer science and engineering.
          </p>
          <p>
            I am passionate about coding and development, actively participating in programming 
            projects and hackathons. My focus areas include web development and API integration. 
            Driven by curiosity and strong problem-solving abilities, I am committed to building 
            impactful and innovative solutions in the field of computer science.
          </p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="https://www.linkedin.com/in/rajnandini-rathore-608486383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a> /{" "}
          </p>
        </div>
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/raju.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Rajnandini Rathore</h4>
          <h6>Web Developer</h6>
        </div>
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/ritwiza.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Ritwiza Bhardwaj</h4>
          <h6>Web Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            I’m Ritwiza Bhardwaj, a 2nd-year B.Tech student at Banasthali Vidyapith, Jaipur. 
            I’m originally from Lucknow, and I have a deep interest in technology, coding, 
            and innovation. I love exploring new ideas, learning emerging tech skills,
             and building meaningful digital solutions  
          </p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="https://www.linkedin.com/in/ritz2024?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a> /{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;