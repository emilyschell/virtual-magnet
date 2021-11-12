import React, { useState, useEffect, useRef } from 'react';
import { IoCaretDown } from 'react-icons/io5';

const Dropdown = ({ formData, setFormData, current }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(current);

  // makes dropdown close if user clicks outside it
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener(
      "click", onBodyClick, { capture: true }
    );

    return () => {
      document.body.removeEventListener(
        'click', onBodyClick, { capture: true }
      )
    };
  }, []);

  const options = [
    "in",
    "out",
    "vacation",
    "sick",
    "break",
    "wfh"
  ];

  const renderedOptions = options.map((option) => {

    if (option === selected) {
      return null;
    }

    return (
      <div
        key={option}
        onClick={() => {
          setFormData({ ...formData, location: option });
          setSelected(option);
          setOpen(!open);
        }}
        className="dropdownItem"
      >
        <p className={`statusBox ${option}Box`}>
          {option}
        </p>
      </div>
    );
  });

  return (
    <div className="field dropdownMenuField">

      <label className="dropdownLabel">
        status:
      </label>

      <div ref={ref} className="dropdownMenuWhole">
        <div
          onClick={() => setOpen(!open)}
          className={`${open ? 'openDropdownTop' : 'closedDropdownTop'}`}
        >
          <p className={`${selected}Box statusBox`}>{selected}</p>

          <IoCaretDown id="downArrow" />
        </div>

        <div className={`${open ? 'openDropdownMenu' : 'hidden'}`}>
          {renderedOptions}
        </div>

      </div>

    </div>
  );
};

export default Dropdown;