import { useState } from "react";
import './app.css'


function App() {
  //using useState hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [value, setvalue] = useState(0);
  //initialization of variables
  var value1 = "";
  //Array for input selector
  const gunit = ["Centimeter", "Meter", "Kilometer"];
  const gvalue = [1, 100, 100000];
  //Array for output selector
  const runit = ["Centimeter", "Meter", "Kilometer"];
  const rvalue = [1, 100, 100000];

  //function get activated on onchange events of input box and selectors
  function calculate(newValue, index, isGivenUnit) {
    if (isGivenUnit == 0) {
      value1 = newValue;
    }
    else if (isGivenUnit == 1) {


      setSelectedIndex(index);
      console.log("giver");
    } else {

      setSelectedIndex1(index);
      console.log("taker");
    }
    setTimeout(() => {

      //conversion logic
      const result =
        (value1 * gvalue[selectedIndex]) /
        (rvalue[selectedIndex1] * 1);
      setvalue(result);
    }, 500);

  }
  const submit = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <div className="row xx1" >
        <div className="col-xl-3 xx3" style={{ borderBottom: '30px solid black ' }}>
          <h1>Unit convertor</h1>
          <hr />
          <div className="row" >
            <div className="col-xl-6">
              <h6>Input</h6>
              <input
                placeholder="input"
                className="form-control"
                type="number"
                //passing input value and boolean
                onChange={(e) =>
                  calculate(e.target.value, selectedIndex, 0)
                }
              />
              <br/>

              <select
                className="form-control"
                id="dropdown"
                //passing index value and boolean also map is used to extract array element in selector
                onChange={(e) =>
                  calculate(e.target.value, e.target.selectedIndex, 1)
                }
                value={selectedIndex}
              >
                {gunit.map((option, index) => (
                  <option key={index} value={index}>
                    {option}
                  </option>
                ))}
              </select>

            </div>
            <div className="col-xl-6">
            <h6>Output</h6>
              <input className="form-control" type="number" value={value} readOnly />

              <br />
              <select
                className="form-control"
                id="dropdown"
                //passing index value and boolean also map is used to extract array element in selector
                onChange={(e) =>
                  calculate(e.target.value, e.target.selectedIndex, 2)
                }
                value={selectedIndex1}
              >
                {runit.map((option, index) => (
                  <option key={index} value={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
