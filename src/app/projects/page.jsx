"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useSpring, animated } from "@react-spring/web";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import BottomNav from "@/components/BottomNav";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [tooltip, setTooltip] = useState("");
  const [tooltipVisibleId, setTooltipVisibleId] = useState(null);
  const [projects, setProjects] = useState([]); // State to store projects

  const handleCopy = (password) => {
    navigator.clipboard.writeText(password).then(() => {
      setTooltip("Copied!");
      setTimeout(() => setTooltip(""), 2000);
    });
  };

  // Fetch the projects from the JSON file
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Store the fetched data in state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.type === filter);

  return (
    <>
      <title>Projects | Zioun</title>
      <main className="bg-[#12191B] relative overflow-hidden min-h-screen px-3">
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="12, 200, 128"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={["button", "a"]}
        />
        <animated.div>
          <div className="max-w-[1150px] m-auto py-2 z-20 relative">
            <Navbar />
            <div className="text-center mt-5 flex flex-wrap justify-center items-center gap-5">
              <button
                onClick={() => setFilter("all")}
                className={`w-[150px] pt-3 pb-3 ${
                  filter === "all"
                    ? "bg-[#0CC880] text-white"
                    : "bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] text-[#0CC880]"
                } border border-[#0D3026] rounded-lg`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("javascript")}
                className={`w-[150px] pt-3 pb-3 ${
                  filter === "javascript"
                    ? "bg-[#0CC880] text-white"
                    : "bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] text-[#0CC880]"
                } border border-[#0D3026] rounded-lg`}
              >
                Javascript
              </button>
              <button
                onClick={() => setFilter("react")}
                className={`w-[150px] pt-3 pb-3 ${
                  filter === "react"
                    ? "bg-[#0CC880] text-white"
                    : "bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] text-[#0CC880]"
                } border border-[#0D3026] rounded-lg`}
              >
                React
              </button>
              <button
                onClick={() => setFilter("shopify")}
                className={`w-[150px] pt-3 pb-3 ${
                  filter === "shopify"
                    ? "bg-[#0CC880] text-white"
                    : "bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] text-[#0CC880]"
                } border border-[#0D3026] rounded-lg`}
              >
                Shopify
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-10">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <div className="flex justify-center p-5">
                      <img
                        className="h-[200px] w-full object-cover rounded-lg"
                        src={project.img}
                        alt={project.title}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center px-5 pb-5">
                        <div>
                          <h2 className="text-[#909090] text-[16px] font-semibold">
                            {project.type.toUpperCase()}
                          </h2>
                          <h1 className="text-[20px] font-semibold">{project.title}</h1>
                        </div>
                        <div className="flex gap-5">
                          {project.type === "shopify" && (
                            <a
                              className="relative text-[30px] cursor-pointer"
                              onClick={() => handleCopy(project.password)}
                              onMouseEnter={() => setTooltipVisibleId(project.id)}
                              onMouseLeave={() => setTooltipVisibleId(null)}
                            >
                              <FontAwesomeIcon icon={faKey} />
                              {tooltipVisibleId === project.id && (
                                <span className="absolute bottom-full -mt-10 w-[120px] left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-gray-700 rounded opacity-100 transition-opacity">
                                  {tooltip || "Copy Password"}
                                </span>
                              )}
                            </a>
                          )}
                          <a className="text-[30px]" href={project.github} target="blank">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                          <a className="text-[30px]" href={project.live} target="blank">
                            <img
                              className="h-[27px] mt-[7px]"
                              src="https://i.ibb.co/JB1pg7S/expand-removebg-preview.png"
                              alt="Expand"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <Footer />
              <div className="z-50 absolute">
                <BottomNav />
              </div>
            </div>
          </div>
        </animated.div>
      </main>
    </>
  );
}

