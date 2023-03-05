import React, {useState} from 'react';

import './App.scss';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {SettingsCounter} from "./components/SettingsCounter";

function App() {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [count, setCount] = useState<number>(startValue);

    const [error, setError] = useState<string | null>(null);
    const [inputError, setInputError] = useState(false);
    
    return (
        <div className="App">
            <SettingsCounter count={count}
                             startValue={startValue}
                             setStartValue={setStartValue}
                             setCount={setCount}
                             maxValue={maxValue}
                             setMaxValue={setMaxValue}
                             error={error}
                             setError={setError}
                             inputError={inputError}
            />
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     count={count}
                     setCount={setCount}
                     error={error}
                     setError={setError}
                     inputError={inputError}
                     setInputError={setInputError}/>
        </div>
    );
}

export default App;
