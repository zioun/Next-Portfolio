import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const pathName = usePathname();

  const isCurrentPath = (path) => pathName === path;

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Updates the year every minute in case of a year change during the session

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);

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
                  <Link href="/">
                    <li
                      className={`cursor-pointer ${
                        isCurrentPath("/") ? "text-[#0CC880]" : "text-[#9CA3AF]"
                      }`}
                    >
                      <span>Home</span>
                    </li>
                  </Link>
                  <Link href="/projects">
                    <li
                      className={`cursor-pointer ${
                        isCurrentPath("/projects")
                          ? "text-[#0CC880]"
                          : "text-[#9CA3AF]"
                      }`}
                    >
                      <span>Projects</span>
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li
                      className={`cursor-pointer ${
                        isCurrentPath("/contact")
                          ? "text-[#0CC880]"
                          : "text-[#9CA3AF]"
                      }`}
                    >
                      <span>Contact</span>
                    </li>
                  </Link>
                </ul>
              </div>
              <h1 className="text-[#979797a8] text-[16px]">
                &copy; {currentYear} Zioun. All rights reserved.
              </h1>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
