// import React, { useState } from "react";

// export default function SignIn() {
//         const[count,setcount] = useState(0);
//         // const {username}= useParams() //to get username from url
        
//     const [profile, setProfile] = useState(null);
//     useEffect(() => {
//        //find username by matching to name or surname
//        const user = userData.find(user => user.name.toLowerCase() === username.toLowerCase());
//        if (user){
//         setProfile(user);//if user is found set profile to stat of user
//        } else {
//         setProfile(null); // no user found profile will be set to null
//        }
//     }, [username]);
    
//     if (!profile) {
//         return <div>
//             Profile not found
//         </div>;
//     }
//     return(
//         <div>
        
//         <h1>SignIn</h1>
//         <label for username="Username">Username</label>
//         <input type="text" for="Username"/>
//         <label for= "Password">Password</label>
//         <input type="password" for= "Password"/>
//         <button type="submit" onClick={() => setcount(count + 1)}>Submit</button>
//         {count}
        
//         </div>
//     )
// }
