import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

    const data = useLoaderData();
    
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch("https://api.github.com/users/viralbhoi")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);

    return (
        <div className="bg-gray-600 m-4 p-4 text-white text-xl flex flex-col md:flex-row items-center md:items-start gap-6 rounded-lg shadow-lg">
            <img
                src={data.avatar_url}
                alt="Profile"
                className="rounded-xl w-[15%] object-cover"
            />

            {/* Text Section */}
            <div className="text-center md:text-left bg-gray-500 w-[100%] h-[100%] p-8 text-2xl rounded-xl">
                <p className="mb-2">ID : {data.login}</p>
                <p className="mb-2">Name : {data.name}</p>
                <p>Location : {data.location}</p>
            </div>
        </div>
    );
};

export default Github;

export const githubInfoLoader = async() =>{
    const response = await fetch("https://api.github.com/users/viralbhoi");
    return response.json();
}
