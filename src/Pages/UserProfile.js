import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import UserData from '../userData'

export default function UserProfile() {
    const {username}= useParams()
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        //simulate fetching user data
        const fetchProfile = async () =>{
            //Here you would fetch data from an API
            setProfile({name: username, bio: 'This is a user bio.'});
        };
        fetchProfile()
    }, [username]);
    // if (UserData.name === useParams()){
    const newData = UserData[0].map((items) => {
        return (
            <div key={items.id}>
                <div>
                    {/* <img id="images" src={items.savedItems.src} /> */}
                    {items.savedItems}
                    
                </div>
                <div>
                    {/* <p>{items.savedItems.name}</p> */}
                </div>
                {console.log(username)}
            </div>
        )
    })
    return(
        <div>
            
            <h1>
                User Profile: {profile ? profile.name: 'Loading...'}
            </h1>
            <p>{profile? profile.bio: ''}</p>
            <div>{newData}</div>
        </div>
    );
}

