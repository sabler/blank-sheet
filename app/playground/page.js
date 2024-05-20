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
  var [letters, setLetters] = useState("")


  function clearTape () {
// do something
  }

function grabValues (value, elemId) {
  let incomingVal = value !== "" ? value : 0;
  let addThisArray = numberArray;

  let subTotal = 0;


  addThisArray.splice((elemId-1),1,incomingVal);
  console.log(addThisArray);

  addThisArray.forEach(number => {
    console.log(number);
    subTotal += parseInt(number);
    
  })

  setSum(subTotal);

  
  



}

function addValues () {
  numberArray.forEach(number => {
    setSum(parseInt(sum) + parseInt(number));
  })
}

  return (
    <main className="h-screen">
              <table
              onClick={() => clearTape()}
              >

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
