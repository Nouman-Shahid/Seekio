import { Head, Link } from "@inertiajs/react";
import hero from "../images/assets/hero.png";
import Navbar from "@/Components/Navbar";

export default function Welcome({ auth }) {
    return (
        <>
            <Navbar auth={auth} />
            <Head title="Welcome" />

            <div className="flex justify-between p-16 items-center">
                <div className="flex flex-col w-4/5 space-y-5">
                    <p className="text-7xl font-bold text-gray-600">
                        ᴀʟʟ ᴛʜᴇ ꜱᴋɪʟʟꜱ ʏᴏᴜ ɴᴇᴇᴅ ɪɴ ᴏɴᴇ ᴘʟᴀᴄᴇ
                    </p>
                    <p className="text-3xl w-5/6 ">
                        From critical skills to technical topics, Seekio
                        supports your professional development.
                    </p>

                    <div className="flex space-x-7">
                        <Link
                            // href={route("enrollNow")}
                            className="py-2 px-3 bg-blue-600 active:bg-blue-700 text-white font-bold rounded-md"
                        >
                            View Course
                        </Link>
                        {auth.role !== "teacher" ? (
                            <Link
                                // href={route("enrollNow")}
                                className="py-2 px-3 bg-green-600 active:bg-green-700 text-white font-bold rounded-md"
                            >
                                Enroll Now
                            </Link>
                        ) : auth.role === "teacher" ? (
                            <Link
                                href={route("teacherdashboard")}
                                className="py-2 px-3 bg-green-600 active:bg-green-700 text-white font-bold rounded-md"
                            >
                                Make Course
                            </Link>
                        ) : null}
                    </div>
                </div>

                <img
                    src={hero}
                    alt="hero"
                    className="w-4/12 h-96 opacity-90 rounded-xl"
                />
            </div>
        </>
    );
}
