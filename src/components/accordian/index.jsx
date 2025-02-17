import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  //Single selected
  // Multiple selected
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  console.log(selected);

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length ? (
          data.map((dataItem) => {
            return (
              <div className="item">
                <div
                  onClick={() => {
                    handleSingleSelection(dataItem.id);
                  }}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
