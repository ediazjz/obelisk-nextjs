"use client"

import { useState } from "react";

// import { buildColorPalette } from "@/tools";

export default function Home() {
  return (
    <main>
      <Button />
    </main>
  )
}

function Button() {
  const [colors, setColors] = useState({
    primary: '',
    accent: '',
    light: '',
    dark: '',
    success: '',
    warning: '',
    error: '',
  });

  const handleClick = async () => {
    // const queryString = 'primary=%23000000&accent=%23891470&light=%23FBFBFB&dark=%232C2C2C&success=%23115918&warning=%23B24B00&error=%23A40000';
    // const response = await fetch(`/config/color-palette?${queryString}`);
    // const data = await response.json();

    // buildColorPalette("#084297", "#891470", "#FBFBFB", "#2C2C2C", "#115918", "#B24B00", "#A40000")
    // setColors(data);
  };

  return (
    <>
      <button onClick={handleClick}>Get Colors</button>

      <h2>HSLuv colors:</h2>
      <ul>
        <li>Primary: {colors.primary}</li>
        <li>Accent: {colors.accent}</li>
        <li>Light: {colors.light}</li>
        <li>Dark: {colors.dark}</li>
        <li>Success: {colors.success}</li>
        <li>Warning: {colors.warning}</li>
        <li>Error: {colors.error}</li>
      </ul>

      <button>Simulate error</button>

      <div className="relative flex flex-col">
        <div className="w-96 h-20 bg-gray-200">A</div>
        <div className="w-96 h-20 bg-teal-200 -z-index-10">B</div>
      </div>
    </>
  );
}
