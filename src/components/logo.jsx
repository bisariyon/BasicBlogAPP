import React from "react";

function Logo(props) {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Bisariyon Logo"
        // width={props.width}
        className={props.className}
      />
    </div>
  );
}

export default Logo;
