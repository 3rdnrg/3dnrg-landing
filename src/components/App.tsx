// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Impressum from './Impressum';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <Routes>
                        <Route path="/impressum" element={<Impressum />} />
                        {/* Define other routes as needed */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
