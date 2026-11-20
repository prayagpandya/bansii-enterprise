import React from "react";

const Vision = () => {
  return (
    <div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">MOUNTAIN</h1>
        </div>
        <div className="back">
          <h2>Angular</h2>
          <p>
            Good tools make application development quicker and easier to
            maintain than if you did everything by hand..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
