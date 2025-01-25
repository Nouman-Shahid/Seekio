import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import loadingpic from "../images/assets/loading.png";
import { Head, Link, useForm } from "@inertiajs/react";

const Teacher = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_title: "",
        course_desc: "",
        course_category: "",
        course_hours: "",
        course_level: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("submit_course"), {
            onError: (error) => {
                if (error.error) {
                    alert(error.error);
                }
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex justify-center w-full items-center min-h-screen bg-gray-100">
                <form
                    onSubmit={submit}
                    className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 p-8 mx-64 bg-white rounded-lg shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
                        Create a New Course
                    </h2>
                    <div>
                        <InputLabel
                            htmlFor="course_title"
                            value="Course Title"
                        />
                        <TextInput
                            id="course_title"
                            name="course_title"
                            value={data.course_title}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            isFocused={true}
                            onChange={(e) =>
                                setData("course_title", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.course_title}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex justify-between gap-4 mt-6">
                        <div className="w-full">
                            <InputLabel
                                htmlFor="course_category"
                                value="Course Category"
                            />
                            <select
                                id="course_category"
                                name="course_category"
                                value={data.course_category}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) =>
                                    setData("course_category", e.target.value)
                                }
                                required
                            >
                                <option value="" disabled>
                                    Select course category
                                </option>
                                <option value="IT">
                                    Information Technology
                                </option>
                                <option value="Business">Business</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Science">Science</option>
                                <option value="Humanities">Humanities</option>
                            </select>
                            <InputError
                                message={errors.course_category}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel
                                htmlFor="course_hours"
                                value="Course Hours"
                            />
                            <TextInput
                                id="course_hours"
                                type="number"
                                name="course_hours"
                                value={data.course_hours}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("course_hours", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.course_hours}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <InputLabel
                            htmlFor="course_desc"
                            value="Course Description"
                        />
                        <textarea
                            id="course_desc"
                            name="course_desc"
                            value={data.course_desc}
                            className="w-full min-h-36 max-h-36  border border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) =>
                                setData("course_desc", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.course_desc}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-6">
                        <InputLabel
                            htmlFor="course_level"
                            value="Course Level"
                        />
                        <select
                            id="course_level"
                            name="course_level"
                            value={data.course_level}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e) =>
                                setData("course_level", e.target.value)
                            }
                            required
                        >
                            <option value="" selected disabled>
                                Select course level
                            </option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        <InputError
                            message={errors.course_level}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="w-full text-center bg-blue-600 p-2 rounded-md text-white font-bold active:to-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <img
                    src={loadingpic}
                    class="w-full h-48 object-cover sm:h-screen sm:w-4/12 opacity-85"
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default Teacher;
