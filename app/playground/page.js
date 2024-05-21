'use client';
import { useState } from "react"
import Forms from "./components/forms";

export default function Playground() {

  var [numberArray, setNumberArray] = useState([0,0,0,0]);
  var [letterArray, setLetterArray] = useState(["","","",""]);

  var [cell_one, setCellOne] = useState("");
  var [cell_two, setCellTwo] = useState("");
  var [cell_three, setCellThree] = useState("");
  var [cell_four, setCellFour] = useState("");
  var [sum, setSum] = useState("");
  var [letters, setLetters] = useState("TK")


function typeCheck (userInput) {
  let check = parseInt(userInput);

  if(isNaN(check)) {
    return "string";
  } else {
    return "number";
  }
}

function grabValues (value, elemId) {
  let incomingVal = value !== "" ? value : "";
  let addThisArray = numberArray;
  let printThisArray = letterArray;

  let subTotal = 0;
  let completeSentence = "";
  




  if(!isNaN(value)) {
  addThisArray.splice((elemId-1),1,incomingVal);
  console.log(addThisArray);
  } else {
    printThisArray.splice((elemId-1),1,incomingVal);
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

console.log(`strings!${letters}`);
  setSum(subTotal);
  setNumberArray(addThisArray);

  
}

function addValues () {
  numberArray.forEach(number => {
    setSum(parseInt(sum) + parseInt(number));
  })
}

  return (
    <main className="h-screen">
              <table>

            <tr>
                <td>A<Forms formula={addValues} callback={grabValues} id="1" /></td>
                <td>B<Forms formula={addValues} callback={grabValues} id="2" /></td>
                <td>C<Forms formula={addValues} callback={grabValues} id="3" /></td>
                <td>D<Forms formula={addValues} callback={grabValues} id="4" /></td>
            </tr>

            {/* <tr>
              <td>{cell_one}</td>
              <td>{cell_two}</td>
              <td>{cell_three}</td>
              <td>{cell_four}</td>
            </tr> */}
        </table>

        <div>Total of numbers: {sum}</div>
        <div>String concatination: {letters}</div>

    </main>
  )
}
