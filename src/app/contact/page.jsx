"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState, useRef } from "react";
import AnimatedCursor from "react-animated-cursor";
import { RotatingSquare } from "react-loader-spinner";
import { useSpring, animated } from "@react-spring/web";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import BottomNav from "@/components/BottomNav";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_eqac46d', 'template_bg03p4p', form.current, {
        publicKey: 'q3QGb-eToFEvGe3dK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          return toast.success("Your message has been sent successfully. We will contact you very soon ");
        },
        (error) => {
          console.log('FAILED...', error.text);
          return toast.error("FAILED...", error.text);
        },
      );
  };
  const pageTitle = "Contact | Zioun";

  return (
    <>
    <title>{pageTitle}</title>
    <main className="bg-[#12191B] relative overflow-hidden min-h-screen px-3">
      <Toaster />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#12191B] z-50">
          <div className="text-center text-white">
            <RotatingSquare color="#0cc880" height={200} width={200} />
            <p className="mt-4 text-[#0CC880] text-2xl font-bold">{count}%</p>
          </div>
        </div>
      )}
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
            <div className="grid grid-cols-12 gap-5 mt-5 lg:mt-10">
              <div className="col-span-12 lg:col-span-4 bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20 relative">
                <div className="flex gap-5 pl-2 m-5 pt-3 items-center">
                  <div>
                    <h1 className="text-[20px]">CONTACT INFO</h1>
                  </div>
                </div>
                <div className="flex gap-5 pl-2 m-5 items-center">
                  <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg  p-5">
                    <a className="text-[30px]" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h1 className="text-[#0CC880] font-semibold">MAIL US</h1>
                    <h2>jionkhan0@gmail.com</h2>
                  </div>
                </div>
                <div className="flex gap-5 pl-2 m-5 items-center">
                  <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg  p-5">
                    <a className="text-[30px]" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h1 className="text-[#0CC880] font-semibold">CONTACT US</h1>
                    <h2>+880 1619-971997</h2>
                  </div>
                </div>
                <div className="flex gap-5 pl-2 m-5 items-center">
                  <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg  p-5">
                    <a className="text-[30px]" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h1 className="text-[#0CC880] font-semibold">LOCATION</h1>
                    <h2>Mirpur,Dhaka,Bangladesh</h2>
                  </div>
                </div>
                <div className="flex gap-5 pl-2 m-5 pt-3 items-center">
                  <div>
                    <h1 className="text-[20px]">CONTACT INFO</h1>
                  </div>
                </div>
                <div className="flex mb-10 pl-2 lg:mb-0">
                  <div className="flex gap-5 mx-5 items-center">
                    <div className="py-3 bg-[#126E4D] text-white rounded-full">
                      <a className="py-5 px-[19px] text-[25px]" href="https://www.facebook.com/MOZiounKhan/" target="blank">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-5 mx-5 items-center">
                    <div className="py-3 bg-[#126E4D] text-white rounded-full">
                      <a className="py-5 px-[19px] text-[25px]" href="https://www.linkedin.com/in/zioun/" target="blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-5 mx-5 items-center">
                    <div className="py-3 bg-[#126E4D] text-white rounded-full">
                      <a className="py-5 px-[19px] text-[25px]" href="https://github.com/Zioun" target="blank">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute w-[300px] -left-[30px] opacity-5"
                  src="https://i.ibb.co/Rzq76rn/Screenshot-4-removebg-preview.png"
                  alt=""
                />
              </div>
              <div className="col-span-12 lg:col-span-8 bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20">
                <div className="py-5 px-6">
                  <div>
                    <h1 className="text-white text-[40px]">
                      Let’s work{" "}
                      <span className="text-[#0CC880]">together.</span>
                    </h1>
                  </div>
                  <div className="mt-5">
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        className="w-full outline-none text-[#0CC880] bg-transparent border border-[#0cc8807a] py-3 px-5 rounded-lg"
                        type="text"
                        placeholder="Name *"
                        name="from_name"
                        required
                      />
                      <input
                        className="w-full mt-5 outline-none text-[#0CC880] bg-transparent border border-[#0cc8807a] py-3 px-5 rounded-lg"
                        type="email"
                        placeholder="Email *"
                        name="from_email"
                        required
                      />
                      <input
                        className="w-full mt-5 outline-none text-[#0CC880] bg-transparent border border-[#0cc8807a] py-3 px-5 rounded-lg"
                        type="text"
                        placeholder="Subject *"
                        name="from_subject"
                        required
                      />
                      <textarea
                        className="w-full h-[200px] mt-5 outline-none text-[#0CC880] bg-transparent border border-[#0cc8807a] py-3 px-5 rounded-lg resize-none"
                        name="message"
                        id=""
                        placeholder="Message *"
                        required
                      ></textarea>
                      <button className="before:ease mt-5 relative h-12 w-full overflow-hidden bg-[#13c3807d] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-10 before:translate-x-12 before:rotate-6 before:bg-[#0CC880] before:opacity-20 before:duration-700 hover:before:-translate-x-[750px] rounded-lg">
                        <span className="relative z-10">Send Message</span>
                      </button>
                    </form>
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
