import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
    const [password, setPassword] = useState();
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [length, setLength] = useState(8);
    const [characterAllowed, setCharacterAllowed] = useState(false);

    const passwordGenerator = useCallback(() => {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const nums = "0123456789";
        const chars = "!@#$%^&*()_-+";

        let pass = "";
        let idx = Math.floor(Math.random() * str.length);
        pass += str[idx];

        if (characterAllowed) {
            let idx = Math.floor(Math.random() * chars.length);
            pass += chars[idx];
            str += chars;
        }

        if (numberAllowed) {
            let idx = Math.floor(Math.random() * nums.length);
            pass += nums[idx];
            str += nums;
        }

        for (let i = pass.length; i < length; i++) {
            let idx = Math.floor(Math.random() * str.length);
            pass += str[idx];
        }

        const shuffled = pass
            .split("")
            .sort(() => Math.random() - 0.5)
            .join("");

        setPassword(shuffled);
    }, [numberAllowed, length, characterAllowed, setPassword]);

    useEffect(() => {
        passwordGenerator();
    }, [numberAllowed, length, characterAllowed, passwordGenerator]);

    return (
        <>
            <div className="w-full h-screen bg-gray-700 text-orange-800 flex justify-center">
                <div className="bg-gray-800 w-[70%] h-auto rounded-xl p-4 m-6">
                    <h1 className="text-6xl text-center">Password Generator</h1>
                    <div className="text-3xl text-center m-4">
                        <input
                            type="text"
                            value={password}
                            readOnly
                            className="bg-white w-[90%] p-2 rounded-xl px-4"
                        />
                    </div>

                    <div className="text-xl text-center flex m-4 gap-20 justify-center">
                        <div className="text-xl flex">
                            <input
                                type="range"
                                className="bg-orange-800 slider"
                                value={length}
                                min={8}
                                max={50}
                                onChange={(e) => setLength(e.target.value)}
                            />
                            <label> Length: {length} </label>
                        </div>
                        <div className="text-xl flex">
                            <input
                                type="checkbox"
                                className=""
                                checked={numberAllowed}
                                onChange={(e) =>
                                    setNumberAllowed(e.target.checked)
                                }
                            />
                            <label> Number </label>
                        </div>
                        <div className="text-xl flex">
                            <input
                                type="checkbox"
                                className=""
                                checked={characterAllowed}
                                onChange={(e) =>
                                    setCharacterAllowed(e.target.checked)
                                }
                            />
                            <label> Charecters </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
