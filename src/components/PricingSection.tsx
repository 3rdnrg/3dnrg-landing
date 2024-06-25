import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface Tier {
    name: string;
    id: string;
    href: string;
    priceMonthly: string;
    description: string;
    features: string[];
    featured: boolean;
}

interface PricingSectionProps {
    tiers: Tier[];
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const PricingSection: React.FC<PricingSectionProps> = ({ tiers }) => {
    return (
        <div className="bg-white px-6 py-12 sm:py-20 lg:px-8 pb-32 pt-20">
            <div
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Flexible Preisgestaltung für Ihre Bedürfnisse
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                Egal, ob Sie ein kleines Unternehmen, ein Großunternehmen oder irgendetwas dazwischen sind,
                wir bieten Ihnen maßgeschneiderte Preisoptionen,
                die auf Ihre individuellen Anforderungen zugeschnitten sind.
            </p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(
                                tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                                'text-base font-semibold leading-7'
                            )}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured ? 'text-white' : 'text-gray-900',
                                    'text-5xl font-bold tracking-tight'
                                )}
                            >
                                {tier.priceMonthly}
                            </span>
                            <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>
                                /3D-Modell
                            </span>
                        </p>
                        <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base leading-7')}>
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-gray-300' : 'text-gray-600',
                                'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                                        aria-hidden="true"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                            )}
                        >
                            Get started today
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingSection;
