import React from "react";

function iframe() {
  return {
    __html:
      '<iframe style="position: absolute;top: 70px;margin: -40px 0 0 0;scale: 0.9;height: 100vh;" src="./BarGraphSort/visualgo.net/en/sorting.html" width="100%" height="100%"></iframe>',
  };
}

export default function BarGraphSort() {
  return (
    <div>
      <div dangerouslySetInnerHTML={iframe()} />
    </div>
  );
}
