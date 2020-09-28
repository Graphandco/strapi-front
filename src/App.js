import React from 'react';
import './assets/styles/style.scss';
import Tips from './components/tips/Tips';
import { TipsProvider } from './components/contexts/TipsContext';
import Header from './components/Header';
import Home from './components/Home/Home';

function App() {
    return (
        <TipsProvider>
            <Header />
            <main>
                <Home />
                {/* <Tips /> */}
            </main>
        </TipsProvider>
    );
}

export default App;
