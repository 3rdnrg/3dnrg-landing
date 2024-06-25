import React from 'react';

const ContactForm = () => {
    return (
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-34">
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Lassen Sie mit uns gemeinsam arbeiten
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Arbeiten Sie mit uns zusammen, um Ihre Ziele zu erreichen.
                        Wir sind darauf spezialisiert, maßgeschneiderte Lösungen zu liefern,
                        die innovative Technologie mit fachmännischem Handwerk kombinieren.
                        Gemeinsam können wir Visionen in die Realität umsetzen.
                    </p>
                    <form action="#" method="POST" className="mt-16">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Vorname
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="nachname" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Nachname
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="nachname"
                                        id="nachname"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Firma
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex justify-between text-sm leading-6">
                                    <label htmlFor="phone" className="block font-semibold text-gray-900">
                                        Phone
                                    </label>
                                    <p id="phone-description" className="text-gray-400">
                                        Optional
                                    </p>
                                </div>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        aria-describedby="phone-description"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex justify-between text-sm leading-6">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Wie können wir Ihnen helfen?
                                    </label>
                                    <p id="message-description" className="text-gray-400">
                                        Max 500 characters
                                    </p>
                                </div>
                                <div className="mt-2.5">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                            <button
                                type="submit"
                                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
