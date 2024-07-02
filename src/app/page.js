"use client";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { RotatingSquare } from "react-loader-spinner";
import { useSpring, animated } from "@react-spring/web";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
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

  return (
    <main className="bg-[#12191B] overflow-hidden min-h-screen relative px-3">
      {/* {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#12191B] z-50">
          <div className="text-center text-white">
            <RotatingSquare color="#0cc880" height={200} width={200} />
            <p className="mt-4 text-[#0CC880] text-2xl font-bold">{count}%</p>
          </div>
        </div>
      )} */}
      <div className="absolute z-50">
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
      </div>
      <animated.div style={props}>
        <div className="max-w-[1150px] m-auto py-2 z-20 relative">
          <div className="z-50">
            <Navbar />
            <div>
              <div className="grid grid-cols-12 gap-3 lg:gap-10 mt-5 lg:mt-10">
                <div className="col-span-12 md:col-span-4">
                  <Sidebar />
                </div>
                <div className="col-span-12 md:col-span-8">
                  <Main />
                </div>
              </div>
            </div>
            <Footer></Footer>
            <div><BottomNav></BottomNav></div>
          </div>
        </div>
        <img
          className="h-[700px] z-10 absolute top-0 -right-52 rotate-[90deg] opacity-60"
          src="https://i.ibb.co/VQ8NLMK/65fc1ba1ea85400f35700aa6-bg-green-light.png"
        />
      </animated.div>
    </main>
  );
}
