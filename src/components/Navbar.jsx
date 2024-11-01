import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();

  const isCurrentPath = (path) => pathName === path;

  return (
    <div className="z-20">
      <div className="">
        <nav className="flex justify-between items-center rounded-lg px-5 lg:px-10 py-3 lg:py-5 bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026]">
          <div>
            <img className="w-10" src="https://i.ibb.co.com/jGWVY81/z-1-removebg-preview.png" alt="" />
            <h1 className="text-[#FFFFFF] text-[25px] font-semibold"></h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-10">
              <li className={isCurrentPath("/") ? "text-[#0CC880]" : "text-gray-400"}>
                <Link href="/">
                  <span>Home</span>
                </Link>
              </li>
              <li className={isCurrentPath("/projects") ? "text-[#0CC880]" : "text-gray-400"}>
                <Link href="/projects">
                  <span>Projects</span>
                </Link>
              </li>
              <li className={isCurrentPath("/contact") ? "text-[#0CC880]" : "text-gray-400"}>
                <Link href="/contact">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-2 cursor-pointer py-1 rounded-lg ">
            <a href="resume/resume.pdf" download>
              <button className="font-bold border border-[#0CC880] rounded-full px-5 text-[#0CC880] py-1">
                Resume
              </button>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
