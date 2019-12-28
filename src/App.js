import React from 'react';
import atliensimg from './ATLiens.png';
import './App.css';

const nationalsDate = new Date(2019, 8, 11);
const now = new Date();

const timeBetwix = nationalsDate - now;

const daysBetwix = Math.ceil(Math.abs(timeBetwix) / (1000 * 60 * 60 * 24));

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {daysBetwix} Days since we became National Champions
                </p>

                <p>
                </p>

                <img src={atliensimg} className="App-logo" alt="atliensimg"/>

                <p>
                </p>

                <p>
                    And Awayyy We Go!
                </p>
            </header>
            <body className="App-header">

            </body>
        </div>

    );
}

export default App;
