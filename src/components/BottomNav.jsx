import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BottomNav() {
  const pathName = usePathname();

  const isCurrentPath = (path) => pathName === path;

  return (
    <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] shadow-t-lg border-[#0CC880] border-t-2 fixed w-full bottom-0 left-0 block md:hidden">
      <div className="flex">
        <div className={`flex-1 group ${isCurrentPath("/") ? "text-[#0CC880]" : "text-gray-400"}`}>
          <Link href="/">
            <span
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full group-hover:text-[#0CC880]"
            >
              <span className="block px-1 pt-1 pb-1 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span>Home</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-[#0CC880] rounded-full"></span>
              </span>
            </span>
          </Link>
        </div>
        <div className={`flex-1 group ${isCurrentPath("/projects") ? "text-[#0CC880]" : "text-gray-400"}`}>
          <Link href="/projects">
            <span
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full group-hover:text-[#0CC880]"
            >
              <span className="block px-1 pt-1 pb-1 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                <span>Projects</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-[#0CC880] rounded-full"></span>
              </span>
            </span>
          </Link>
        </div>
        <div className={`flex-1 group ${isCurrentPath("/contact") ? "text-[#0CC880]" : "text-gray-400"}`}>
          <Link href="/contact">
            <span
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full group-hover:text-[#0CC880]"
            >
              <span className="block px-1 pt-1 pb-1 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <span>Contact</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-[#0CC880] rounded-full"></span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
