'use client';
import { useState } from "react"
import Forms from "./components/forms";

export default function Playground() {


  var [cell_one, setCellOne] = useState("");
  var [cell_two, setCellTwo] = useState("");
  var [cell_three, setCellThree] = useState("");
  var [cell_four, setCellFour] = useState("");
  var [sum, setSum] = useState("0");
  var [letters, setLetters] = useState("")


function grabValues (value, field_value) {
  // console.log(value);
  // console.log(field_value);

  // console.log(letters);

  if (isNaN(value)) {
    setLetters(letters + value)
    
  } else {
    setSum(parseInt(value) + parseInt(sum));
    console.log(value);
  }


  

}

  return (
    <main className="h-screen">
              <table>
            <tr>
                <td>A<Forms callback={grabValues} id="One" /></td>
                <td>B<Forms callback={grabValues} id="Two" /></td>
                <td>C<Forms callback={grabValues} id="Three" /></td>
                <td>D<Forms callback={grabValues} id="Four" /></td>
            </tr>

            <tr>
              <td>{cell_one}</td>
              <td>{cell_two}</td>
              <td>{cell_three}</td>
              <td>{cell_four}</td>
            </tr>
        </table>

        <div>Total of numbers: {sum}</div>
        <div>String concatination: {letters}</div>

    </main>
  )
}
