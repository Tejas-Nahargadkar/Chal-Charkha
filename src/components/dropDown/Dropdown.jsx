import { ArrowDropDown } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import "./Dropdown.css";
export default function DropDown({
  label,
  links = [],
  value,
  handleChange = () => {},
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      let documentClick = document.body.addEventListener("click", close, true);
    }

    return () => {
      document.body.removeEventListener("click", close, true);
    };
  }, [show]);
  function close() {
    document.body.removeEventListener("click", close, true);
    console.log("closing");
    setShow(false);
  }

  return (
    <div className="dropdown">
      <div
        className="toggler"
        onClick={() => {
          setShow(!show);
        }}
      >
        {value ? (value.length > 0 ? value : label) : label}
        <ArrowDropDown />
      </div>
      {show && (
        <div className="dropmenu" aria-labelledby="dropdownMenuLink">
          {links.map((link, index) => (
            <>
              <button onMouseDown={() => handleChange(link)} key={index}>
                {link}
              </button>{" "}
              <hr />{" "}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
