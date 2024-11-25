import { useState } from "react";

const ColorPicker = () => {
  const [colorChanger, setColorChanger] = useState("#000000");

  const handleColorChange = (e) => {
    setColorChanger(e.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Color Picker</h2>
      <input
        type="color"
        style={{
          width: "100px",
          height: "100px",
          border: "none",
          outline: "none",
          cursor: "pointer",
          borderRadius: "10px",
        }}
        onChange={handleColorChange}
      />
      <div
        style={{
          backgroundColor: colorChanger,
          width: "250px",
          height: "280px",
          borderRadius: "10px",
          marginTop: "10px",
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
