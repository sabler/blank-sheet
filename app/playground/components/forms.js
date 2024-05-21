'use client';

import { useState } from "react";

export default function Forms({formula, callback, id}) {

    



    return (
        <form>
            <label for= "characterEntry">Enter here</label>
                <input name="characterEntry" id={id} type="text"
                    onBlur={(e) => callback(e.target.value, id)}
                >


                </input>
        </form>
    )


}