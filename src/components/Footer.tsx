import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Impressum from './Impressum';

const Footer = () => {
    const [showImpressum, setShowImpressum] = useState(false);

    return (
        <Router>
            <div className="flex flex-col">
                <main className="flex">
                    <Routes>
                        <Route path="/impressum" element={<Impressum />} />

                    </Routes>
                </main>
                <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" aria-label="Homepage">
                                <img src="/logo.JPG" className="h-8" alt="Flowbite Logo"/>
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                            </Link>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <button className="hover:underline me-4 md:me-6" onClick={() => setShowImpressum(true)} aria-label="Impressum">Impressum</button>
                                </li>
                                <li>
                                    <Link to="/datenschutz" className="hover:underline me-4 md:me-6" aria-label="Datenschutzerklärung">Datenschutzerklärung</Link>
                                </li>
                                <li>
                                    <Link to="/kontakt" className="hover:underline" aria-label="Kontakt">Kontakt</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">3DNRG™</Link>. All Rights Reserved.</span>
                    </div>
                </footer>
            </div>
            {showImpressum && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="max-w-screen-lg w-full p-8 bg-white rounded-lg shadow dark:bg-gray-900">
                        <button className="absolute top-2 right-2 p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600" onClick={() => setShowImpressum(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Impressum />
                    </div>
                </div>
            )}
        </Router>
    );
}

export default Footer;
