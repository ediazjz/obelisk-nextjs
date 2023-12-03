"use client"

export default function Home() {
  return (
    <main>
      <Button />
    </main>
  )
}

function Button() {
  const handleClick = async () => {
    const queryString = 'primary=%23000000&accent=%23891470&light=%23FBFBFB&dark=%232C2C2C&success=%23115918&warning=%23B24B00&error=%23A40000';
    const response = await fetch(`/config/color-palette?${queryString}`);
    const data = await response.json();

    console.log(data);
  };

  return (
    <button onClick={handleClick}>Get Colors</button>
  );
}
