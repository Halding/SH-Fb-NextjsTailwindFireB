import React from 'react';
import {signOut} from "next-auth/react";
import Image from "next/image";

function SidebarRow({src, Icon, title} : any) {
    return (
        <div className="flex space-x-2 md:p-2 md:ml-2 items-center hover:bg-gray-200 rounded-xl cursor-pointer  ">
            {src && (
                <Image
                    className="rounded-full"
                    src={src}
                    width="30"
                    height="30"
                    layout="fixed"
                />
            )}
            {Icon && <div className="h-8 w-8 text-blue-500">
                {<Icon/>}
            </div>}

            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    );
}

export default SidebarRow;