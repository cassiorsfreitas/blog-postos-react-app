import React from "react";
import LiveClock from "react-live-clock";

function Clock() {
  return (
    <h3>
      <LiveClock format="hh:mm:ss a" ticking />
    </h3>
  );
}

export default Clock;
