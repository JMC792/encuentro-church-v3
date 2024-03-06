import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Removal Defense',
        description: 'Legal defense services for individuals facing deportation, ensuring their rights are protected throughout the removal proceedings.',
    },
    {
        name: 'Asylum',
        description: 'Assistance with asylum applications for those seeking protection due to persecution or fear of persecution in their home country.',
    },
    {
        name: 'Cancellation of Removal',
        description: 'Expert legal representation for eligible individuals seeking to cancel their removal from the U.S. and obtain lawful status.',
    },
    {
        name: 'Adjustment of Status',
        description: 'Guidance and support for individuals seeking to change their legal status to lawful permanent resident within the United States.',
    },
    {
        name: 'Consular Processing',
        description: 'Assistance with obtaining visas through U.S. consulates abroad, facilitating lawful entry into the United States for various purposes.',
    },
    {
        name: 'Special Immigrant Juvenile Status',
        description: 'Legal services for minors who have been abused, neglected, or abandoned, seeking to obtain lawful permanent residency in the U.S.',
    },
    {
        name: 'Naturalizations',
        description: 'Support and representation for individuals seeking to become U.S. citizens through the naturalization process.',
    },
    {
        name: 'Waivers',
        description: 'Assistance with filing waivers for individuals who are ineligible for a visa or green card due to certain grounds of inadmissibility.',
    },
    {
        name: 'Mandamus',
        description: 'Filing of mandamus actions to compel government action on delayed immigration applications and petitions.',
    },
    {
        name: 'Family Petitions',
        description: 'Guidance on filing petitions for family members to immigrate to the U.S., including spouses, children, and other close relatives.',
    },
    {
        name: 'U-Visa',
        description: 'Assistance with U-Visa applications for victims of crimes in the U.S. who have cooperated with law enforcement.',
    },
    {
        name: 'DACA',
        description: 'Legal services for individuals applying for or renewing Deferred Action for Childhood Arrivals (DACA) status.',
    },
]

export default function Example(props) {
    return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
                <h2 className="text-base font-semibold leading-7 text-indigo-600">{props.heading}</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.title}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                {props.paragraph}
                </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                    <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
                </div>
            ))}
            </dl>
        </div>
        </div>
    </div>
    )
}
