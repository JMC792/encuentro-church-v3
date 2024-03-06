const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Cases', value: '+50' },
    { label: 'Cities', value: '+10' },
    { label: 'Lives Saved', value: '+100' },
]

export default function TwoColumnDark(props) {
    return (
        <div className=" bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">

                {/* Heding */}
                <p className="text-base font-semibold leading-7 text-primary">{props.heading}</p>
                
                {/* Title */}
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{props.title}</h1>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                
                {/* Left Text */}
                <div>
                    <p>
                        {props.paragraph1}
                    </p>
                    <p className="mt-8">
                        {props.paragraph2}
                    </p>
                </div>

                {/* Right Text */}
                <div>
                <p>
                    {props.paragraph3}
                </p>
                <p className="mt-8">
                    {props.paragraph4}
                </p>
                </div>
                
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                {stats.map((stat, statIdx) => (
                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                    <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                    <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
    )
}
