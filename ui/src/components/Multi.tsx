import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const handleNewField = (value) => ({
  label: value,
  value: value.toUpperCase(),
});

const options = [
  { label: "Hot", value: "Hot" },
  { label: "Med", value: "Med" },
  { label: "Mild", value: "Mild" },
  { label: "Vegan", value: "Vegan" },
  { label: "Vegietarian", value: "Vegietarian" },
];

export function Multi () {
  const [selected, setSelected] = useState([]);
  console.log('selected', selected)


  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        isCreatable={true}
        onCreateOption={handleNewField}
      />
    </div>
  );
};

