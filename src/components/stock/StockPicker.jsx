import React, { useState } from "react";
import Select from "react-select";

import "./StockPicker.css";

const options = [
  { value: "OLE", label: "OLECTRA" },
  { value: "TATA", label: " TATAMOTERS" },
  { value: "ASY", label: "ASHOKLEY" },
  { value: "JBMA", label: "JBMA" },
  { value: "EIC", label: "EICHEAMOT" },
];

const timeframes = [
  { label: "Q1 FY2023" },
  { label: "Q2 FY2023" },
  { label: "Q1 FY2022" },
  { label: "Q2 FY2022" },
  { label: "Q1 FY2021" },
];

export const StockPicker = () => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);

  const handleStockChange = (selectedOptions) => {
    setSelectedStocks(selectedOptions);
  };

  const handleTimeframeChange = (selectedOption) => {
    setSelectedTimeframe(selectedOption);
  };

  const handleClear = () => {
    setSelectedStocks([]);
    setSelectedTimeframe(null);
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "0px" }}>
        <h1>Welcome!</h1>
        <p>
          you can ask question to search through earning cells transcript of
          public companies
        </p>
      </div>

      <div className="select">
        <Select
          value={selectedStocks}
          options={options}
          isMulti
          onChange={handleStockChange}
        />
        <Select
          value={selectedTimeframe}
          options={timeframes}
          onChange={handleTimeframeChange}
        />
      
      </div> 
      <div className="Search">
          <lable>
           <input placeholder="search" className="input"/>
          
      </lable>
      <button className="btn">Search</button> 
      </div>
    
    
      {selectedStocks.length > 0 && (
        <div className="map-stock">
          {selectedStocks.map((stock) => (
            <>
              <span key={stock.value} className="map-data">
                {stock.label}{" "}
                <button
                  onClick={() =>
                    setSelectedStocks(
                      selectedStocks.filter((s) => s.value !== stock.value)
                    )
                  }
                >
                  x
                </button>
                {/* <span className="view">  View Insights</span> */}
              
              </span>
              <span className="dumy-text">
                Olectra Greentech Limited is planning to invest Rs.800 Crores in
                a facility. The plans for the funding of the facility include
                equity and debt components. Equity will be used to secure medium
                to long-term financing while debt will be used to finance the
                capex. The details of the equity and debt components are yet to
                be finalized.
              </span>
            </>
          ))}
        </div>
      )}
      {selectedTimeframe && (
        <div className="map-data">
          {selectedTimeframe.label}{" "}
          <button onClick={() => setSelectedTimeframe(null)}>x</button>
        </div>
      )}

      {(selectedStocks.length > 0 || selectedTimeframe) && (
        <button onClick={handleClear}>Clear</button>
      )}
    </div>
  );
};
