import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './assets/styles/style.scss';
import GlobalStyle from './components/GlobalStyle'
import { TipsProvider } from './components/contexts/TipsContext';
import { RealisationsProvider } from './components/contexts/RealisationsContext';
import {AnimatePresence} from 'framer-motion'
import Header from './components/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import Tips from './components/tips/Tips';
import MentionsLegales from './MentionsLegales';
import PolitiqueConfidentialite from './PolitiqueConfidentialite';
import Realisations from './Realisations';
import About from './components/about/About';

function App() {
    const location = useLocation();
    return (
        <TipsProvider>
            <RealisationsProvider>
                <GlobalStyle />
                <Header />
                    <AnimatePresence exitBeforeEnter>
                <main>
                        <Switch location={location} key={location.pathname}>
                            <Route path='/' exact>
                                <Home />
                            </Route>
                            <Route path='/contact' exact>
                                <Contact />
                            </Route>
                            <Route path='/realisations' exact>
                                <Realisations />
                            </Route>
                            <Route path='/about' exact>
                                <About />
                            </Route>
                            <Route path='/tips' exact>
                                <Tips />
                            </Route>
                            <Route path='/mentions-legales' exact>
                                <MentionsLegales />
                            </Route>
                            <Route path='/politique-confidentialite' exact>
                                <PolitiqueConfidentialite />
                            </Route>
                        </Switch>
                    {/* <Tips /> */}
                </main>
                    </AnimatePresence>
                <Footer />
                </RealisationsProvider>
        </TipsProvider>
    );
}

export default App;
