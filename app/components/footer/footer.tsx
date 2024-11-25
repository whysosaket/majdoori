import Image from "next/image";
import React from "react";

import AppStore from "@/app/assets/app-store.png";
import PlayStore from "@/app/assets/play-store.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#173400] rounded-[3rem] p-8">
      <div className="bg-white rounded-3xl p-8">
        <div className="w-full flex justify-between">
          <div className="w-1/4">
            <h1 className="font-semibold">Company</h1>
            <ul className="text-sm text-gray-600 font-semibold mt-5 space-y-2">
              <li> What&apos;s New </li>
              <li> About </li>
              <li> Press </li>
              <li> Careers </li>
              <li> Social Good </li>
              <li> Contact </li>
            </ul>
          </div>

          <div className="w-1/4">
            <h1 className="font-semibold">Community</h1>
            <ul className="text-sm text-gray-600 font-semibold mt-5 space-y-2">
              <li> Medicare for Business </li>
              <li> 2022 Creator Report </li>
              <li> Charities </li>
              <li> Creator Profile Directory </li>
              <li> Explore Templates </li>
            </ul>
          </div>

          <div className="w-1/4">
            <h1 className="font-semibold">Support</h1>
            <ul className="text-sm text-gray-600 font-semibold mt-5 space-y-2">
              <li> Help Topics </li>
              <li> Getting Started </li>
              <li> Linktree Pro </li>
              <li> Features & How-Tos </li>
              <li> FAQs </li>
              <li> Report a Violation </li>
            </ul>
          </div>

          <div className="w-1/4">
            <h1 className="font-semibold">Trust & Legal</h1>
            <ul className="text-sm text-gray-600 font-semibold mt-5 space-y-2">
              <li> Terms & Conditions </li>
              <li> Privacy Notice </li>
              <li> Cookie Notice </li>
              <li> Trust Center </li>
              <li> Cookie Preferences </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="flex justify-start gap-4">
            <Image src={AppStore} alt="logo" width={150} height={100} />
            <Image src={PlayStore} alt="logo" width={150} height={100} />
          </div>
          <div className="gap-2">
            <div className="bg-gray-200 mx-2 rounded-full p-3 w-12 h-12 inline-block justify-center items-center">
              <FaInstagram size={22} color="gray" />
            </div>
            <div className="bg-gray-200 mx-2 rounded-full p-3 w-12 h-12 inline-block justify-center items-center">
              <FaTwitter size={22} color="gray" />
            </div>
            <div className="bg-gray-200 mx-2 rounded-full p-3 w-12 h-12 inline-block justify-center items-center">
              <FaFacebook size={22} color="gray" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9ee86f] text-[#173100] rounded-3xl px-8 py-20 mt-4">
        <h1 className="font-bold text-9xl text-center">Medicare</h1>
      </div>

      <div className="flex justify-between text-[#9ee86f] text-sm px-2 mt-10">
        <p>&copy; 2022 Majdoori. All rights reserved.</p>

        <p>Saket & Tanmay</p>
      </div>
    </div>
  );
};

export default Footer;
