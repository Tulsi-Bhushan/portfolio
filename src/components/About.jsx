import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-first to-second text-white xs-sm:pt-72"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="sm:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>

        <p className="text-xl mt-30">
          Hi, I'm Tulsi Bhushan, currently a third-year EXTC student majoring in
          IoT. My journey into the world of technology began with a fascination
          for how devices and software can seamlessly interact to create smart
          solutions. This curiosity led me to delve deep into web development
          and software engineering, exploring the intricacies of HTML, CSS,
          JavaScript, and the MERN stack. Throughout my academic journey, I've
          worked on diverse projects, including home automation and automated
          greenhouse systems, which have solidified my understanding of IoT and
          software development. My dedication and hard work have been recognized
          in various hackathons and project competitions, where I've secured
          accolades such as first runner-up in Unplugged 1.0 and project winner
          in Strike.
        </p>

        <br />

        <p className="text-xl">
          With a commitment to continuous learning, I have also gained
          proficiency in C, C++, and AI/ML, further broadening my technical
          skill set. My one-month internship at Jitulex provided practical
          experience and reinforced my passion for creating impactful digital
          experiences. I've embarked on projects that have challenged and
          enriched my abilities. My journey is not just about the technologies
          but also about understanding the intricate dance between design and
          functionality. Every challenge I encounter becomes an opportunity for
          growth. With each step forward, I'm committed to pushing my
          boundaries, constantly learning, and evolving as a front-end
          developer.
        </p>
      </div>
    </div>
  );
};

export default About;
