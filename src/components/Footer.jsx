import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[#0cc8806d] pb-20 md:pb-0">
      <div className="py-2 md:py-5">
        <div className="">
          <nav className="flex justify-center items-center rounded-lg px-10 py-3">
            <div className="text-center">
              <h1 className="text-[#FFFFFF] text-[25px] font-semibold">
                Zioun
              </h1>
              <div className="py-5 hidden md:block">
                <ul className="flex gap-10">
                <Link href={"/"}>
                  <li className="text-[#9CA3AF]">
                    <span href="/">Home</span>
                  </li>
                  </Link>
                  <Link href={"/projects"}>
                  <li className="text-[#9CA3AF]">
                    <span href="projects">Projects</span>
                  </li>
                  </Link>
                  <Link href={"/contact"}>
                  <li className="text-[#9CA3AF]">
                    <span href="contact">Contact</span>
                  </li>
                  </Link>
                </ul>
              </div>
              <h1 className="text-[#FFFFFF] text-[16px]">
                &copy; 2024 Zioun. All rights reserved.
              </h1>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
