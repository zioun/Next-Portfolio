import React from "react";

export default function Certification() {
  return (
    <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[#0c382a]  text-white rounded-lg p-5 border border-[#0D3026] relative mt-5">
      <div className="z-10">
        <h1 className="text-[20px] text-[#0CC880] font-semibold">
          Certification
        </h1>
        <div className="">
            <div>
            <h2 className="text-[#979797] mt-3">2024 - 2024</h2>
            <h3 className="mt-2">Full Stack Web Development</h3>
            <a href="https://drive.google.com/file/d/1YgJXlrTje_gxFKKJaFO7t3w_ZKfQIiZh/view" target="blank" className="text-[#0CC880]">View Certificate</a>
            </div>

            <div>
            <h2 className="text-[#979797] mt-5">2024 - 2024</h2>
            <h3 className="mt-2">Advance Front End Web Design</h3>
            <a href="https://drive.google.com/file/d/1KmyfbsiTl2x3pFv8MwYmYKorCM6dcakW/view" target="blank" className="text-[#0CC880]">View Certificate</a>
            </div>
        </div>
      </div>
    </div>
  );
}
