'use client';
import { useState } from "react"
import Forms from "./components/forms";

export default function Playground() {


  var [cell_one, setCellOne] = useState("");
  var [cell_two, setCellTwo] = useState("");
  var [cell_three, setCellThree] = useState("");
  var [cell_four, setCellFour] = useState("");
  var [sum, setSum] = useState(0);


function grabValues (value, field_value) {
  // console.log(value);
  console.log(field_value);
  

  

  if (parseInt(value) !== NaN) {
    setSum(parseInt(value) + parseInt(sum));
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
              <td>{sum}</td>
              <td>{sum}</td>
              <td>{sum}</td>
              <td>{sum}</td>
            </tr>
        </table>

    </main>
  )
}
