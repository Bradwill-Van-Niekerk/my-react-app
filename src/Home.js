import React from 'react';
import { WallPaper } from "./Image-data";
import Nav from "./Nav";

export default function Start() {

    const newData = WallPaper.map((items) => {
        return (
            <div >
                <div>
                    <img id="images" src={items.scr} />
                </div>
                <div>
                    <p>{items.name}</p>
                </div>
            </div>
        )
    })

    return (
        <body>
            <h1>This Is the wallpaper site hope you have fun</h1>
            {Nav()}
            <div id="image-container">
                {console.log(typeof (WallPaper))}
                {newData}
            </div>
        </body>
    )
}