import React from 'react';
import Image from "next/image";
import {useSession} from "next-auth/react";
import {ChatIcon, ShareIcon, ThumbUpIcon} from "@heroicons/react/outline";

function Post() {

    const {data: session} = useSession();

    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex- items-center space-x-2">
                    <img className="rounded-full" src={session!.user!.image as string} width="40" height="40" alt="" />
                </div>

                <div>
                    <p className="font-medium">{session?.user?.name}</p>
                </div>

                <p className=" pt-4">Yo this is my first post</p>
            </div>

            <div className="relative h-56 md:h-96 bg-white">
                <Image src="https://i.postimg.cc/wT9xZtC7/IMG-20210503-220304.jpg" objectFit="cover" layout="fill" />
            </div>

        {/* footer of post */}

            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">

                <div className="inputIcon rounded-none ">
                    <ThumbUpIcon className="h-4"></ThumbUpIcon>
                    <p className="text-xs sm:text-base">Like</p>
                </div>

                <div className="inputIcon rounded-none">
                    <ChatIcon className="h-4"></ChatIcon>
                    <p className="text-xs sm:text-base">Comment</p>
                </div>

                <div className="inputIcon rounded-none">
                    <ShareIcon className="h-4"></ShareIcon>
                    <p className="text-xs sm:text-base">Share</p>
                </div>

            </div>

        </div>
    );
}

export default Post;