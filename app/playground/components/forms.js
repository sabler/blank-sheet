'use client';

import { useState } from "react";

export default function Forms({callback, id}) {

    



    return (
        <form>
            <label for= "characterEntry">Enter here</label>
                <input name="characterEntry" id={id} type="text"
                
                onChange={(e) => callback(e.target.value, id)}

                ></input>
        </form>
    )


}