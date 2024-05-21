'use client';
import { useState } from "react"
import Forms from "./components/forms";

export default function Playground() {

  var [numberArray, setNumberArray] = useState([0,0,0,0]);
  var [letterArray, setLetterArray] = useState(["","","",""]);
  var [sum, setSum] = useState("");
  var [letters, setLetters] = useState("TK")


function grabValues (value, elemId) {
  
  let addThisArray = numberArray;
  let printThisArray = letterArray;

  let subTotal = 0;
  let completeSentence = "";
  
  if(!isNaN(value)) {
      let incomingVal = value !== "" ? value : "0";
      addThisArray.splice((elemId-1),1,incomingVal);
      printThisArray.splice((elemId-1),1, "");
      console.log(addThisArray);
  } else {
      let incomingVal = value !== "" ? value : "";
      printThisArray.splice((elemId-1),1,incomingVal);
      addThisArray.splice((elemId-1),1, 0);
      console.log(printThisArray);
  }


  addThisArray.forEach(number => {
    console.log(number);
    if(!isNaN(number)) {
    subTotal += parseInt(number);
    }
  })

  printThisArray.forEach(item => {
    completeSentence += item;
  }

  );

  setLetters(completeSentence);
  setSum(subTotal);
  setNumberArray(addThisArray);
  setLetterArray(printThisArray);

  
}

  return (
    <main className="h-screen">
              <table>

            <tr>
                <td>A<Forms callback={grabValues} id="1" /></td>
                <td>B<Forms callback={grabValues} id="2" /></td>
                <td>C<Forms callback={grabValues} id="3" /></td>
                <td>D<Forms callback={grabValues} id="4" /></td>
            </tr>

        </table>

        <div>Total of numbers: {sum}</div>
        <div>String concatination: {letters}</div>

    </main>
  )
}
