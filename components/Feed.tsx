import React from 'react';
import Stories from "./Stories";
import InputBox from "./InputBox";


function Feed() {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            <div className="mx-auto">
            <Stories></Stories>
            <InputBox></InputBox>
            {/*  Post  */}
            </div>

        </div>
    );
}

export default Feed;