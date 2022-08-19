import React from 'react';
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";

function InputBox() {

    const  {data: session} = useSession();

    const sendPost = (event : any) => {
        event.preventDefault();
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    src={session!.user!.image as string}
                    width="40"
                    height="40"
                    layout="fixed"
                ></Image>
                <form className="flex flex-auto">
                    <input className=" rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                           type="text" placeholder={`What's on your mind, ${session?.user?.name}?`}
                    />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
            </div>

            <div>
                <div>
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div></div>
                <div>
                    <EmojiHappyIcon className="h-7 text-yellow-300"/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>

        </div>
    );
}

export default InputBox;