import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
// import styles from "./HeadTailsGame.module.css";
const options = [
  {
    id: 0,
    value: "",
    name: "Select a value",
  },
  {
    id: 1,
    value: "H",
    name: "H",
  },
  {
    id: 2,
    value: "T",
    name: "T",
  },
];

const HeadTailGame = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [hover, setHover] = useState({ row: "", col: "" });

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      let lastIndex = data.length - 1;
      let lastValue = data[lastIndex];
      console.log(lastIndex);
      console.log(lastValue);
      if (lastValue && lastValue.includes(value)) {
        lastValue.push(value);
        setData((prev) => [...prev.slice(0, lastIndex), lastValue]);
        setError("");
      } else {
        setData((prev) => [...prev, [value]]);
        setError(""); 
      }
    } else {
      setError("Invalid Option, Please Pick any value");
    }
    setValue("");
  };

  const deleteItems = (idx, idy) => {
    let data1 = [...data];
    data1[idx].splice(idy, 1);
    setData(data1);
  };
  const getIndex = (idx, idy) => {
    setHover({ row: idy + 1, col: idx + 1 });
  };

  return (
    // <Fragment>
    <div>
      <h2 className={` mt-2 my-3 py-2 mx-auto  w-25`}>
        Heads or Tails
      </h2>
      <div className="container p-3">
        <div className="d-flex justify-content-center">
          <select
            className="form-select mx-3 w-25 shadow-sm"
            name="cars"
            id="id"
            onChange={handleChange}
          >
            {options.map((option) => (
              <option
                value={option.value}
                key={option.id}
                selected={option.name === value}
              >
                {option.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {error && <p className="text-danger mx-3 f-bold">{error}</p>}
        <div className="scrap">
        <div className="d-flex justify-content-center flex-wrap mt-3">
          {data.map((parent, idx) => {
            return (
              <div className="flex-column">
                {parent.map((child, idy) => (
                //   <Fragment>
                <>
                    <span
                      data-tip
                      data-for="happyFace"
                      onMouseOver={() => getIndex(idx, idy)}
                    >
                      <div
                        className={`d-flex m-1 px-4 py-3  rounded`}
                        onClick={() => deleteItems(idx, idy)}
                      >
                        {child}
                      </div>
                    </span>
                    <ReactTooltip id="happyFace" type="warning" effect="solid">
                      <span>
                        {`Delete - row:${hover.row}, col:${hover.col}`}{" "}
                      </span>
                    </ReactTooltip>
                  {/* </Fragment> */}
                  </>
                ))}
              </div>
            );
          })}
        </div>
        </div>
       
      </div>
      </div>
   
  );
};

export default HeadTailGame;