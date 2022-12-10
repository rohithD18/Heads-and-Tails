import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getIdx, getIdy } from "../redux/Action";
import "./HeadsTails.css";

function HeadsTails() {
  let dispatch = useDispatch();
  const [horT, setHorT] = useState("");
  const [headsTail, setHeadsTail] = useState([]);
  const handleChange = (e) => {
    setHorT(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (horT) {
      let prevIndex = headsTails.length - 1;
      let prevValue = headsTails[prevIndex];
      if (prevValue && prevValue.includes(horT)) {
        prevValue.push(horT);
      } else {
        setHeadsTail((prev) => [...prev, [horT]]);
      }
    } else {
      alert("Select H or T !");
    }
    setHorT("");
  };
  dispatch(getData(headsTail));
  const headsTails = useSelector((state) => state.dataReducer.data);
  const getIndex = (indexX, indexY) => {
    dispatch(getIdx(indexX + 1));
    dispatch(getIdy(indexY + 1));
  };
  const idX = useSelector((state) => state.dataReducer.idx);
  const idY = useSelector((state) => state.dataReducer.idy);
  const deleteData = (indexX, indexY) => {
    let values = [...headsTails];
    values[indexX].splice(indexY, 1);
    setHeadsTail(values);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Heads or Tails</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <select id="selectOne" value={horT} onChange={handleChange}>
            <option>Select a value</option>
            <option>H</option>
            <option>T</option>
          </select>
          &nbsp;
          <button type="submit">Submit</button>
        </form>
        <div className="dataValues">
          {headsTails.map((item, indexX) => {
            return (
              <div key={indexX}>
                {item.map((item2, indexY) => {
                  return (
                    <div
                      key={indexY}
                      onMouseOver={() => getIndex(indexX, indexY)}
                      className="items"
                    >
                      <span
                        id="tooltip"
                        onClick={() => deleteData(indexX, indexY)}
                      >
                        {item2}
                        <span id="tooltipText">
                          {`Delete - X: ${idX} Y: ${idY}`}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default HeadsTails;
