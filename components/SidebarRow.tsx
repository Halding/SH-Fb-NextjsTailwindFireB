import React from 'react';
import {signOut} from "next-auth/react";
import Image from "next/image";

function SidebarRow({scr, Icon, title} : any) {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
            {scr && (
                <Image
                    className="rounded-full"
                    src={scr}
                    width="30"
                    height="30"
                    layout="fixed"
                />
            )}
            {Icon && <Icon classeName="h-8 w-8 text-blue-500"/>}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    );
}

export default SidebarRow;