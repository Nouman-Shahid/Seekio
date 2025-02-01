import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Card = ({ data = [] }) => {
    console.log("Received data:", data);

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center my-16">
            {data.map((course) => (
                <div className="w-96 h-[65vh] bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
                    <a href="#">
                        <img
                            className="rounded-t-lg w-full h-60 object-cover"
                            src={course.course_image}
                            alt={course.course_title}
                        />
                    </a>
                    <div className="p-5 flex flex-col justify-between h-full">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {course.course_title}
                            </h5>
                        </a>
                        <p className="mb-3 text-gray-700 flex-grow">
                            {course.course_desc}
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-green-600 font-bold font-sans">
                                PKR {course.course_amount}
                            </p>
                            <SecondaryButton
                                href="#"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg active:bg-green-700"
                            >
                                Enroll now
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
