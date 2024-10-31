"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { RotatingSquare } from "react-loader-spinner";
import { useSpring, animated } from "@react-spring/web";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faExpand } from "@fortawesome/free-brands-svg-icons";
import BottomNav from "@/components/BottomNav";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 0) {
          clearInterval(timer);
          setLoading(false);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 12.5);
    return () => clearInterval(timer);
  }, []);

  const props = useSpring({
    opacity: loading ? 0 : 1,
    config: { duration: 1000 },
  });
  const pageTitle = "Projcets | Zioun";
  return (
    <>
      <title>{pageTitle}</title>

      <main className="bg-[#12191B] relative overflow-hidden min-h-screen px-3">
        {/* {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#12191B] z-50">
          <div className="text-center text-white">
            <RotatingSquare color="#0cc880" height={200} width={200} />
            <p className="mt-4 text-[#0CC880] text-2xl font-bold">{count}%</p>
          </div>
        </div>
      )} */}
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="12, 200, 128"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <animated.div style={props}>
          <div className="max-w-[1150px] m-auto py-2 z-20 relative">
            <div className="z-50">
              <Navbar />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-10">
                <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20">
                  <div className="">
                    <div>
                      <div className="flex justify-center p-5">
                        <img
                          className="h-[200px] w-full z-10 object-cover rounded-lg"
                          src="https://i.ibb.co/7krXWmB/Untitled-design-2.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center px-5 pb-5">
                          <div className="">
                            <h2 className="text-[#909090] text-[16px] font-semibold">
                              Forum Site
                            </h2>
                            <h1 className="text-[20px] font-semibold">Barta</h1>
                          </div>
                          <div className="flex gap-5 justify-center items-center">
                            <a
                              className="text-[30px]"
                              href="https://github.com/programming-hero-web-course1/b9a12-client-side-Zioun"
                              target="blank"
                            >
                              <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                              className="text-[30px]"
                              href="https://forum-b54c7.web.app/"
                              target="blank"
                            >
                              <img
                                className="h-[27px]"
                                src="https://i.ibb.co/JB1pg7S/expand-removebg-preview.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20">
                  <div className="">
                    <div>
                      <div className="flex justify-center p-5">
                        <img
                          className="h-[200px] w-full z-10 object-cover rounded-lg"
                          src="https://i.ibb.co/nCBkBRb/Untitled-design-3.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center px-5 pb-5">
                          <div className="">
                            <h2 className="text-[#909090] text-[16px] font-semibold">
                              Forum Site
                            </h2>
                            <h1 className="text-[20px] font-semibold">Barta</h1>
                          </div>
                          <div className="flex gap-5 justify-center items-center">
                            <a
                              className="text-[30px]"
                              href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-Zioun"
                              target="blank"
                            >
                              <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                              className="text-[30px]"
                              href="https://volunteer-e5e10.web.app/"
                              target="blank"
                            >
                              <img
                                className="h-[27px]"
                                src="https://i.ibb.co/JB1pg7S/expand-removebg-preview.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20">
                  <div className="">
                    <div>
                      <div className="flex justify-center p-5">
                        <img
                          className="h-[200px] w-full z-10 object-cover rounded-lg"
                          src="https://i.ibb.co/sPWfwKd/Untitled-design-4.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center px-5 pb-5">
                          <div className="">
                            <h2 className="text-[#909090] text-[16px] font-semibold">
                              Forum Site
                            </h2>
                            <h1 className="text-[20px] font-semibold">Barta</h1>
                          </div>
                          <div className="flex gap-5 justify-center items-center">
                            <a
                              className="text-[30px]"
                              href="https://github.com/Zioun/B9A10-Client-Side-Zioun"
                              target="blank"
                            >
                              <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                              className="text-[30px]"
                              href="https://assignment-10-a2856.web.app/"
                              target="blank"
                            >
                              <img
                                className="h-[27px]"
                                src="https://i.ibb.co/JB1pg7S/expand-removebg-preview.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20">
                  <div className="">
                    <div>
                      <div className="flex justify-center p-5">
                        <img
                          className="h-[200px] w-full z-10 object-cover rounded-lg"
                          src="https://i.ibb.co/sPWfwKd/Untitled-design-4.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center px-5 pb-5">
                          <div className="">
                            <h2 className="text-[#909090] text-[16px] font-semibold">
                              Forum Site
                            </h2>
                            <h1 className="text-[20px] font-semibold">Barta</h1>
                          </div>
                          <div className="flex gap-5 justify-center items-center">
                            <a
                              className="text-[30px]"
                              href="https://github.com/Zioun/B9A10-Client-Side-Zioun"
                              target="blank"
                            >
                              <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                              className="text-[30px]"
                              href="https://assignment-10-a2856.web.app/"
                              target="blank"
                            >
                              <img
                                className="h-[27px]"
                                src="https://i.ibb.co/JB1pg7S/expand-removebg-preview.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Footer></Footer>
                <div className="z-50 absolute">
                  <BottomNav></BottomNav>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[700px] z-10 absolute top-0 -right-52 rotate-[90deg] opacity-60"
            src="https://i.ibb.co/VQ8NLMK/65fc1ba1ea85400f35700aa6-bg-green-light.png"
          />
        </animated.div>
      </main>
    </>
  );
}
