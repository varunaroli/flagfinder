import React, { useState, useEffect } from "react";
const Findflag = ({ data }) => {
  const continents = Object.values(data);
  const [yourcontinent, setYourcontinent] = useState("");
  const [yourcountry, setYourCountry] = useState([]);
  const [flag, setFlag] = useState([]);
  useEffect(() => {
    let con_list = [];
    for (let country of continents) {
      if (country.continent == yourcontinent) {
        setYourCountry([...country.countries]);
      }
    }
  }, [yourcontinent]);

  function getFlags(name) {
    const flag = yourcountry.filter(flag => flag.name == name);
    setFlag(prev => {
      return [...prev, ...flag];
    });
  }
  return (
    <div>
      <>
        <div className="box">
          <h3>Search here</h3>
          <input
            className="searchbar"
            list="continents"
            placeholder="Start typing..."
            onChange={e => {
              setYourcontinent(e.target.value);
            }}
            value={yourcontinent.continent}
          />
          <datalist id="continents">
            {continents.map((continent, index) => {
              return <option key={index}>{continent.continent}</option>;
            })}
          </datalist>
        </div>
        {yourcountry.length ? (
          <div className="box">
            <h3>Countries</h3>
            <>
              {yourcountry.map(item => {
                return (
                  <div
                    className="elem"
                    onClick={e => {
                      getFlags(item.name);
                    }}
                    key={item.index}
                  >
                    {item.name}
                  </div>
                );
              })}
            </>
          </div>
        ) : (
          ""
        )}

        {flag.length ? (
          <div className="box">
            <h3>Flags</h3>
            {flag.map(list => {
              return (
                <span className="elem">
                  <span>
                    {list.name}-{list.flag}
                  </span>
                </span>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
};
export default Findflag;
