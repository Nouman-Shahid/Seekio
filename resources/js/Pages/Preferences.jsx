import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import loadingpic from "../images/assets/loading.png";
import { Head, useForm } from "@inertiajs/react";

const courses = [
    {
        id: 1,
        title: "Information Technology",
        description:
            "Includes subjects such as web development, data science, cyber security, etc.",
        name: "It",
    },
    {
        id: 2,
        title: "Business",
        description:
            "Includes subjects like Finance, Marketing, Economics, etc.",
        name: "Business",
    },
    {
        id: 3,
        title: "Science",
        description: "Includes subjects like Biology, Chemistry, Physics, etc.",
        name: "Science",
    },
    {
        id: 4,
        title: "Engineering",
        description:
            "Includes subjects like Electrical Engineering, Mechanical Engineering, etc.",
        name: "Engineering",
    },
    {
        id: 5,
        title: "Humanities",
        description:
            "Includes subjects like History, Languages, Philosophy, etc.",
        name: "Humanities",
    },
];

export default function Preferences() {
    const { data, setData, post, errors } = useForm({
        course: null,
    });

    const handleCourseSelection = (e) => {
        setData("course", e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/set_preferences");
    };

    return (
        <AuthenticatedLayout>
            <Head title="Preference" />

            <form onSubmit={handleSubmit} className="py-2 h-auto flex">
                <div className="mx-auto w-full sm:px-6 lg:px-8 space-y-4">
                    <div className="overflow-hidden text-2xl font-bold sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Choose Your Course Preferences
                        </div>
                    </div>
                    {courses.map((item) => (
                        <div
                            className="overflow-hidden bg-white shadow-sm sm:rounded-lg"
                            key={item.id}
                        >
                            <div className="p-6 text-gray-900 flex justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="text-xl font-semibold">
                                        {item.title}
                                    </p>
                                    <p>{item.description}</p>
                                </div>
                                <input
                                    type="radio"
                                    className="size-6"
                                    name="course"
                                    value={item.name}
                                    checked={data.course === item.name}
                                    required
                                    onChange={handleCourseSelection}
                                />
                            </div>
                        </div>
                    ))}
                    {errors.course && (
                        <div className="text-red-600 text-sm mt-2">
                            {errors.course}
                        </div>
                    )}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-3 py-2 my-4 bg-blue-600 text-white font-bold justify-end active:bg-blue-700 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <img
                    src={loadingpic}
                    className="w-5/12 h-full object-cover opacity-85"
                    alt="loading"
                />
            </form>
        </AuthenticatedLayout>
    );
}
