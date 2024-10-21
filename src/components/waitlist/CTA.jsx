import home from '../../assets/people.svg'

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-3">
          <div className="mx-auto flex flex-col gap-8 bg-white/5 px-6 lg:px-0 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            
            <div className="flex-none lg:w-[55%] lg:mr-8"> {/* Adjusted the width and margin for the image */}
              <img
                alt=""
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                className="h-64 w-full rounded-2xl object-cover shadow-xl lg:h-96 lg:max-w-none"
              />
            </div>

            <div className="w-full flex-auto mt-8 lg:mt-0 lg:ml-4"> {/* Adjusted margin for the text section */}
              <h3 className="text-lg font-medium text-black sm:text-xl">Why are we here?</h3>
              <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
                Making the Student Journey Simple and <br /> Stress-Free
              </h2>
              <p className="mt-4 text-base leading-6 text-black sm:text-lg lg:mt-6 lg:text-xl">
                Providing the support, tools, and guidance you need to thrive, so you can focus on learning and building your future with confidence.
              </p>

              <div className="mt-6 flex gap-x-6">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 rounded-md bg-[#1D7BC7] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="text-lg">Join Our Community</span>
                  <img src={home} alt="Home Icon" className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#EEF6FC] to-[#EEF6FC] opacity-100"
          />
        </div>
      </div>
    </div>
  )
}
