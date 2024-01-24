import React from "react";
import Bottom from "./Bottom";
import "./Top.css";

const Top = (props) => {
  const [showBottom, setBottom] = React.useState(false);
  const [meccaNight, setMeccaNight] = React.useState(5);
  const [madinahNight, setMadinahNight] = React.useState(0);
  const decrementMecca = () => {
    meccaNight >= 1 && setMeccaNight(meccaNight - 1);
  };
  const meccaIncrement = () => {
    setMeccaNight(meccaNight + 1);
  };

  const decrementMadinah = () => {
    madinahNight >= 1 && setMadinahNight(madinahNight - 1);
  };
  const madinahIncrement = () => {
    setMadinahNight(madinahNight + 1);
  };

  return (
    <>
      <div
        className="upper"
        onMouseEnter={() => setBottom(true)}
        onMouseLeave={() => setBottom(false)}
      >
        <div className="mecca">
          <p>Mecca</p>
          <p>{meccaNight} nights</p>
        </div>
        <div className="mecca-icon">
          <h3>{meccaNight + madinahNight}</h3>
          <img src={props.img} alt="moon" />
        </div>
        <div className="madinah">
          <p>Madinah</p>
          {madinahNight >= 1 ? <p>{madinahNight} nights</p> : <p>0</p>}
        </div>
      </div>
      {showBottom && (
        <Bottom
          mecca={meccaNight}
          decrementMecca={decrementMecca}
          meccaIncrement={meccaIncrement}
          madinahNight={madinahNight}
          decrementMadinah={decrementMadinah}
          madinahIncrement={madinahIncrement}
        />
      )}
    </>
  );
};

export default Top;
