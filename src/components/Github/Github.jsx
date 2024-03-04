import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const user1 = useLoaderData();
    // const [user1, setUser1] = useState([]);
    // const [user2, setUser2] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/nwaliaez')
    //     .then(response => response.json())
    //     .then(response => {
    //         // console.log('response',response);
    //         setUser1(response);
    //     })
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log('response',response);
    //         setUser2(response);
    //     })
    // }, [])
    
    return (
    <div className='flex text-center text-white bg-gray-500 text-3xl p-4'>
        <div className='flex justify-center'>
            <img src={user1.avatar_url} alt="" />
        </div>
        <br />
        {user1.name}'s Github Followers : {user1.followers}
        {/* <br />
        <div className='flex justify-center'>
            <img src={user2.avatar_url} alt="" />
        </div>
        <br />
        {user2.name}'s Github Followers : {user2.followers} */}
    </div>
    )
}

export default Github

export const githubUserInfo = async () => {
    const res = await fetch('https://api.github.com/users/nwaliaez');
    console.log(res);
    return res.json();
}
