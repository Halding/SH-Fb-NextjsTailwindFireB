import React from 'react';
import StoryCard from "./StoryCard";


const stories = [
    {
        name: "Zana Between-Fjords",
        scr: "https://i.postimg.cc/wT9xZtC7/IMG-20210503-220304.jpg",
        profile: "https://i.postimg.cc/t4MXsBYx/IMG-20220317-222355-2.jpg",
    },
    {
        name: "Elon Musk",
        scr: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezoz",
        scr: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zuckerberg",
        scr: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        scr: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },


]

function Stories() {
    return (
        <div className=" flex justify-center space-x-3 mx-auto">
            {stories.map( story => (
                <StoryCard
                    key={story.scr}
                    name={story.name}
                    src={story.scr}
                    profile={story.profile}
                ></StoryCard>
            ))}
        </div>
    );
}

export default Stories;