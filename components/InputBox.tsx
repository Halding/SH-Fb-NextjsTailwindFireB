import React, {useRef, useState} from 'react';
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {getStorage, ref, uploadBytes} from "firebase/storage";
import {db} from "../firebase";
import {addDoc, collection} from "@firebase/firestore";
import {bool} from "prop-types";


function isEmpty(text: string): boolean {
    return text == null || text.match(/^\s*$/) !== null;
}

function InputBox() {

    //states
    const {data: session} = useSession();
    const [imageToPost, setImageToPost] = useState(null);
    const [miniImageToPost, setMiniImageToPost] = useState(null);
    //Refs
    const filePickerRef = useRef(null as any);
    const inputRef = useRef(null as any);
    // database
    const storage = getStorage();



    const sendPost = (e : any) => {

        e.preventDefault();

        if(isEmpty(inputRef.current.value)) return;

        const docRef = addDoc(collection(db, "post"), {
            message: inputRef.current.value,
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            timestamp: Date.now(),
        }).then( doc => {
            if(imageToPost) {
                const storageRef = ref(storage, `images/${session?.user?.name}/${doc.id + Date.now()}`);

                uploadBytes(storageRef, imageToPost).then((snapshot) => {
                    alert("Images uploaded")
                });

                removeImage();

            }

        })
    };

    const addImageToPost = (e : any) => {

        if (e.target.files[0]){
            setImageToPost(e.target.files[0])

        }

        // miniImage
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])

        }

        reader.onload = (readerEvent: any ) => {
            setMiniImageToPost(readerEvent.target.result)
        }
    }


    const removeImage = () => {
        setImageToPost(null);
        setMiniImageToPost(null);

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
                           type="text"
                           ref={inputRef}
                           placeholder={`What's on your mind, ${session?.user?.name}?`}
                    />
                    <button type="submit" onClick={sendPost}>
                        Submit</button>
                </form>
                {miniImageToPost && (
                    <div onClick={removeImage}
                         className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-150 cursor-pointer">
                        <img className="h-14 object-contain" src={miniImageToPost}/>
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}

            </div>


            <div className="flex justify-center p-4 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div onClick={() => filePickerRef.current.click()}  className="inputIcon">
                    <CameraIcon className="h-7 text-green-400"></CameraIcon>
                    <p className="text-xs sm:text-sm xl:text-base
                    ">Photo/Video</p>
                    <input onChange={addImageToPost} ref={filePickerRef} type="file" hidden />
                </div>


                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300"/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>

        </div>
    );
}

export default InputBox;