import React from "react";
import golf from "../assets/Golf Website.png";
import greenhouse from "../assets/Greenhouse.png";
import amazon from "../assets/Amazon Clone.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: greenhouse,
      heading: "Real-Time Crop Monitoring and control",
      text: "Web development for smart and automated greenhouse using HTML CSS JS with JSON commands. The data is received through HTTP get command in real time.",
      href: "https://tulsi-bhushan.github.io/Greenhouse-Monitoring-and-Control/",
    },
    {
      id: 2,
      src: amazon,
      heading: "Amazon Clone",
      text: " I designed and developed an e-commerce website featuring a clean and intuitive interface with easy navigation. I employed Flexbox and CSS Grid that adapts seamlessly.",
      href: "https://tulsi-bhushan.github.io/E-commerce-Wesbite/",
    },
    {
      id: 3,
      src: golf,
      heading: "Golf Website",
      text: "In the development of the Sidcup Family Golf website, I implemented a variety of technical features to create an engaging and functional user experience. JavaScript is employed to enhance interactivity.",
      href: "https://tulsi-bhushan.github.io/Golf-Website/",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-second to-first w-full text-white md:h-screen xs-sm:pt-72"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 sm:px-0">
          {portfolios.map(({ id, src, text, heading, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center flex-col">
                <span className="w-full px-1 py-3 mt-4 duration-200 hover:scale-105">
                  <h2 className="font-bold mb-2">{heading}</h2>
                  <p className="text-gray-900">{text}</p>
                </span>
                <button className="w-full px-6 py-3 mt-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 text-center">
                  <a href={href}> Learn More</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
