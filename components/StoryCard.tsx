import React from 'react';
import Image from "next/image";

function StoryCard({name,src,profile} : any ) {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-60 lg:w-32
        cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105">


            <Image
                className=" absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
                src={profile}
                width="40"
                height="40"
                layout="fixed"
                objectFit="cover"
            ></Image>
            <Image
                className="object-cover filter brightness-75 lg:hover:brightness-100 rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
            ></Image>
            <p className="invisible  lg:visible absolute justify-center bottom-5 text-white">{name}</p>

        </div>
    );
}

export default StoryCard;