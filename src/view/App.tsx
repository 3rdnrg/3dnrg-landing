import { useState, useEffect  } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';
import { HorizontalDivider } from "../components/divider";
import { TECarousel, TECarouselItem } from "../components/TECarousel";
import Footer from "../components/Footer.tsx";
import ContactForm from "../components/ContactForm.tsx";
import PricingSection from "../components/PricingSection.tsx";







const navigation = [
    // { name: 'Product', href: '#' },
    // { name: 'Features', href: '#' },
    // { name: 'Marketplace', href: '#' },
    // { name: 'Company', href: '#' },

];
const stats = [
    { id: 1, name: 'Digitale Zwillinge ertsellt ', value: '1500+' },
    { id: 2, name: 'PV-Anlagen geplant', value: '1200+' },
    { id: 3, name: 'zufriedene Kunden', value: '100+' },

]


const tiers = [
    {
        name: '3D-Modell Einfamilienhaus',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '30€',
        description: "3-D Rendering zur Unterstützung Ihrer PV-Planung.",
        features: ['für Ein- und Mehrfamilienhäuser bis 500 m² Dachfläche', '50 bis 100 Aufnahmen', '10 € Aufpreis für Gewerbedächer ab 500 m² Fläche und bis 300 Aufnahmen', 'Erhaltem Sie Ihr Modell als PV*SOL- oder .obj-Datei am nächsten Werktag'],
        featured: true,
    },

    {
        name: 'PV-Planung',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '150 €',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'PV*SOL Planung basierend auf Ihren Produktwünschen',
            '3D-Rendering',
            'Verstringung',
            'Ertragsanalyse',
            'Sie erhalten Ihre Planung als PDF oder PV*SOL Datei innerhalb von 3-5 Werktagen',
        ],
        featured: true,
    },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="/logo.JPG"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href}
                               className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className=" lg:justify-end" >
                        <a href="https://glc.3dnrg.com/#" className="text-sm font-semibold leading-6 text-gray-900 py-2 rounded-lg">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    <div className="lg:justify-end ml-4">
                        <a href="https://glc.3dnrg.com/#"
                           className="text-sm font-semibold leading-6 text-gray-900 bg-indigo-500 text-white px-4 py-2 rounded-lg">
                            Sign Up <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50"/>
                    <Dialog.Panel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-center">
                            <img

                                className="h-16  w-16 object-contain"
                                src="/logo.JPG"
                                alt="Logo"
                            />
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">

                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <main>
                <div className="relative isolate">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0}
                              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"/>
                    </svg>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
                                        Steigern Sie die Effizienz und Genauigkeit Ihrer PV-Planung mit digitalen
                                        Zwillingen.
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        Treten Sie ein in eine Welt, in der 3D-Modelle den Weg für fortschrittliche
                                        Photovoltaik-Lösungen ebnen.
                                        Basierend auf Ihren Drohnenfotos erstellen wir 3D-Modelle für eine
                                        professionelle PV-Planung und stellen diese Ihnen als Planungsdatei (.obj- oder
                                        PV*sol-Datei) zur Verfügung.
                                        Sie profitieren von einer genaueren und schnelleren PV-Planung und sparen bis zu
                                        eine Stunde je Projekt.
                                        Zudem können Sie mit der fotorealistische Darstellung der PV-Anlagen auf den
                                        Dächern Ihrer Kunden vertrieblich punkten.
                                        Die Daten stellen wir Ihnen am nächsten Werktag über unsere Plattform digital
                                        zur
                                        Verfügung.
                                    </p>
                                    <div className="mt-10 flex justify-center items-center gap-x-6">
                                        <a
                                            href="#"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Get started
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">

                                    <div className="h-80 w-50 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                src="/self.png"
                                                alt=""
                                                className=" w-full h-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HorizontalDivider/>
                <div
                    className="container mx-auto flex flex-col max-w-7xl px-6 pb-30 pt-36 sm:pt-60 lg:px-8 lg:pt-32 gap-16">
                    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div className="flex flex-col gap-2">
                            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
                                How 3DNRG works?
                            </h2>
                            <p className="text-base font-medium leading-7 text-gray-600">
                                Mit folgenden Schritten gelangen Sie unkompliziert zu Ihrer 3-D Planung.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col lg:flex-row lg:gap-x-8 xl:gap-x-10">
                        <div className="flex flex-col items-start gap-8 lg:w-2/3">
                            <div className="flex items-start gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                                    <span className="text-base font-bold leading-7">1</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">
                                        Account anlegen
                                    </h3>
                                    <p className="text-base font-medium leading-8 text-gray-600">
                                        Legen Sie Ihren Account an. Wir schalten diesen nach kurzer Prüfung für Sie frei und Sie sind direkt startbereit.
                                    </p>
                                </div>
                            </div>

                            <div className="rotate-90 lg:rotate-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 43 42"
                                     fill="none">
                                    <g clip-path="url(#clip0)">
                                        <path
                                            d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                                            fill="#68769F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="42" height="42" fill="white" transform="translate(0.666748)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <div className="flex items-start gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid border-indigo-600 bg-transparent text-indigo-600">
                                    <span className="text-base font-bold leading-7">2</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">
                                        Bilder aufnehmen
                                    </h3>
                                    <p className="text-justify font-medium leading-7 text-gray-600 ">
                                        Nehmen Sie das Objekt bei Ihrem Kundentermin mit einer handelsüblichen Drohne
                                        auf. Eine Anleitung für den Flug finden Sie auf unserer Website.
                                    </p>
                                </div>
                            </div>
                            <div className="rotate-90 lg:rotate-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 43 42"
                                     fill="none">
                                    <g clip-path="url(#clip0)">
                                        <path
                                            d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                                            fill="#68769F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="42" height="42" fill="white" transform="translate(0.666748)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid border-indigo-600 bg-transparent text-indigo-600">
                                    <span className="text-base font-bold leading-7">3</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">
                                        Bilder hochladen
                                    </h3>
                                    <p className="text-base font-medium leading-7 text-gray-600">
                                        Laden Sie Ihre Drohnenbilder (in der Regel ca. 50 Bilder pro Projekt) auf
                                        unserer Plattform hoch.
                                    </p>
                                </div>
                            </div>
                            <div className="rotate-90 lg:rotate-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 43 42"
                                     fill="none">
                                    <g clip-path="url(#clip0)">
                                        <path
                                            d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                                            fill="#68769F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="42" height="42" fill="white" transform="translate(0.666748)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex items-start gap-4">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid border-indigo-600 bg-transparent text-indigo-600">
                                    <span className="text-base font-bold leading-7">4</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">
                                        Fertiges Projekt runterladen
                                    </h3>
                                    <p className="text-base leading-6 text-gray-900 mb-10">
                                        Sie erhalten am folgenden Werktag eine .obj-Datei sowie eine PV*SOL-Datei mit
                                        integriertem 3DModell für Ihre Planung.
                                        Auf Anfrage übernehmen wir auch gerne
                                        die PV-Planung komplett für Sie.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:w-2/3">
                            <video controls className="w-full rounded-lg">

                                <source src="solvis.mp4" type="video/mp4"/>

                                <source src="/solvis.mp4" type="video/mp4"/>

                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                <HorizontalDivider/>
                <div className="container mx-auto px-6 pb-20 pt-30 sm:pt-60 lg:px-8 lg:pt-32 gap-14">
                    <div className="max-w-7xl">
                        <div className="flex flex-col gap-16 lg:flex-row">
                            <div className="max-w-2xl gap-x-14">
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
                                            Trusted by creators worldwide
                                        </h2>
                                        <p className="text-base font-semibold leading-7 text-gray-600">
                                            Vertraut von mehr als 100+ Kunden.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 overflow-hidden rounded-2xl text-center">
                                {stats.map((stat) => (
                                    <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                                        <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <section className="container mx-auto px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32 gap-16">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Testimonial 1 */}
                            <div className="flex-shrink-0 flex flex-col lg:pl-8 xl:pl-20 lg:border-l lg:border-r lg:border-gray-200 mb-10">
                                <img className="h-12 self-start mb-10" src="/object1.png" alt="" />
                                <blockquote className="text-xl leading-relaxed text-gray-900 mb-10 font-serif font-semibold">
                                    <p>
                                        “Alle Prozesse im PV-Bereich sind Dank der raschen und
                                        <span className="block">präzisen Planungsmöglichkeiten die uns 3DNRG bietet,</span>
                                        schlanker und schneller. Die
                                        <span className="block">Entwicklung des Geschäftsbereiches hat durch die</span>
                                        3D Modellierung alle Erwartungen übertroffen.”
                                    </p>
                                </blockquote>

                                <TECarousel autoPlay infiniteLoop showThumbs={false}>
                                    <div>
                                        <img src="/image1JPG.JPG" alt="Image 1" className="object-contain rounded-lg shadow-md" />
                                    </div>
                                    <div>
                                        <img src="/image4.JPG" alt="Image 3" className="object-contain rounded-lg shadow-md" />
                                    </div>
                                </TECarousel>
                            </div>
                            {/* Testimonial 2 */}
                            <div className="flex-shrink-0 flex flex-col lg:pl-8 xl:pl-20 lg:border-l lg:border-r lg:border-gray-200 mb-10">
                                <img className="h-12 self-start mb-10" src="/solvis.png" alt="" />
                                <blockquote className="text-xl leading-relaxed text-gray-900 mb-10 font-serif font-semibold">
                                    <p>
                                        “Dank der 3-D Modelle von 3DNRG sind unsere
                                        <span className="block">Planungskosten gesunken und die Genauigkeit</span>
                                        gestiegen. Unsere Kunden sind von der
                                        Visualisierung Ihrer PV-Anlage begeistert.”
                                        <span className="block"></span>
                                    </p>
                                </blockquote>

                                <TECarousel autoPlay infiniteLoop showThumbs={false}>
                                    <div>
                                        <img src="/image3.JPG" alt="Image 1" className="object-cover rounded-lg shadow-md" />
                                    </div>
                                    <div>
                                        <img src="/image2.JPG" alt="Image 3" className="object-cover rounded-lg shadow-md" />
                                    </div>
                                </TECarousel>
                            </div>
                            {/* Testimonial 3 */}
                            <div className="flex-shrink-0 flex flex-col lg:pl-8 xl:pl-20 lg:border-l lg:border-r lg:border-gray-200 mb-10">
                                <img className="h-12 self-start mb-10" src="/image.png" alt="" />
                                <blockquote className="text-xl leading-relaxed text-gray-900 mb-10 font-serif font-semibold">
                                    <p>
                                        “Mit unserem zuverlässigen Partner 3DNRG, setzen
                                        <span className="block">wir alle Projekte lange vor der Deadline um.</span>
                                        <span className="block">Dank der Modellierung sind Fehlmengen</span>
                                        ausgeschlossen, kein Vergleich zur 2D Planung.”
                                    </p>
                                </blockquote>

                                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                                    <TECarousel autoPlay infiniteLoop showThumbs={false}>
                                        <div>
                                            <img src="/image1JPG.JPG" className="object-cover rounded-lg shadow-md"/>
                                        </div>
                                        <div>
                                            <img src="/image1JPG.JPG" alt="Image 3"
                                                 className="object-cover rounded-lg shadow-md"/>
                                        </div>
                                    </TECarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <HorizontalDivider/>
                {/* Pricing Section */}
                <PricingSection tiers={tiers} />
                <ContactForm/>
                <Footer />


                <HorizontalDivider/>

            </main>
        </div>
    );
}
