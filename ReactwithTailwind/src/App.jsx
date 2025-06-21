import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="bg-amber-300 font-extrabold mx-1.5 text-black underline">Hello world!</h1>
        </>
    );
}

export default App;
