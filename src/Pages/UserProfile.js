import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import userData from '../userData'
import Nav from "../Components/Nav";

export default function UserProfile() {
    const {username}= useParams() //to get username from url
    const [profile, setProfile] = useState(null);
    useEffect(() => {
       //find username by matching to name or surname
       const user = userData.find(user => user.name.toLowerCase() === username.toLowerCase());
       if (user){
        setProfile(user);//if user is found set profile to stat of user
       } else {
        setProfile(null); // no user found profile will be set to null
       }
    }, [username]);
    
    if (!profile) {
        return <div>
            Profile not found
        </div>;
    }

    return (
        <div>
             <Nav/>
            <h1> User Profile: {profile.name} {profile.surname}</h1>
        <Link to = '/'>LogOut</Link>
            <h2>Saved Items:</h2>
            <div>
                {profile.savedItems.length > 0 ? (
                    profile.savedItems.map((savedItem) => (
                        <div key={savedItem.id}>
                            <img src={savedItem.src} alt={savedItem.name} style={{width:"20rem", height: "15rem"}}/>
                            <p>{savedItem.name}</p>
                            </div>
                    ))
                ):(
                    <p>No Saved items</p>
                )}
            </div>
        </div>
    );
}