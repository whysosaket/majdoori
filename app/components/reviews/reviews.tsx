import React from "react";
import Star from "./star";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import ReviewCard from "./review-card";

export interface ReviewInterface {
  title: string;
  content: string;
  stars: number;
  author: string;
}

const Reviews = () => {
  return (
    <div className="w-full px-20 my-20 text-secondary">
      <h1 className="text-4xl font-black">What our Customers say</h1>
      <div className="mt-4 flex gap-4 justify-between">
        <div className="flex gap-4 items-start">
          <div className="flex gap-1 items-start">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <h1 className="flex font-semibold">
            460 Reviews on{" "}
            <span className="text-[#04b37c] mx-1 my-auto">
              <FaStar />
            </span>
            Trustpilot
          </h1>
        </div>
        <button className="px-6 py-2 rounded-[8rem] flex justify-center gap-1 align-middle m-0 bg-white font-bold">
          NEXT <FaArrowRightLong className="my-auto" />
        </button>
      </div>
      <div className="flex gap-4 mt-10">
        {reviews.map((review, index) => (
          <ReviewCard ReviewObject={review} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

const reviews: ReviewInterface[] = [
  {
    title: "I had a great check-up at Medicare Health Service.",
    content:
      "I have been a patient at your Medicare healthcare service for over a year now, and I must say that I am extremely satisfied with the level.",
    stars: 5,
    author: "Darlene Robertson",
  },
  {
    title: "I recently underwent a procedure at Medicare Health Service",
    content:
      "I have been a patient at your Medicare healthcare service for over a year",
    stars: 5,
    author: "Brooklyn Simmons",
  },
  {
    title: "I had a virtual appointment with Medicare Health Service",
    content:
      "I have been a patient at your Medicare healthcare service for over a year now, and I must say that I am extremely satisfied",
    stars: 5,
    author: "Jacob Jones",
  },
  {
    title: "I recently visited Medicare Health Service for a routine check-up",
    content:
      "The staff took all necessary precautions to ensure safety during the pandemic, and my doctor provided clear explanations about my health.",
    stars: 5,
    author: "Robert Fox",
  },
];
