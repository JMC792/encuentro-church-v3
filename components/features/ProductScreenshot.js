import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Swift and Efficient Service',
    description:
      'Experience prompt response times and efficient handling of your immigration matters. Our team prides itself on its speed and effectiveness, ensuring your needs are addressed promptly while maintaining the highest standards of quality.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Expertise and Accuracy',
    description: 'Our team`s expertise in immigration law ensures accurate and precise handling of your case. With our seasoned professionals, you can trust that every detail will be meticulously addressed, resulting in optimal outcomes for your legal matters.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Dedicated to Client Satisfaction',
    description: 'Client satisfaction drives everything we do. From the initial consultation to the resolution of your immigration issues, we prioritize your satisfaction and strive to exceed your expectations at every step of the process. Trust us for an unparalleled service experience.',
    icon: CheckCircleIcon,
  },
]

export default function ProductScreenshot(props) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Text */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                {props.heading}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {props.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {props.paragraph}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Image */}
          <Image
            src={'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&&q=100&w=2070&auto=format&fit=crop'}
            alt="Product screenshot"
            className="order-1 w-[48rem] max-w-none rounded-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
