import React from 'react';
import People from '../assets/people.png'

export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-sm  -mt-40 lg:w-96">
            <div>
              <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Feedback Form
              </h2>
              <p className="text-sm leading-6 text-gray-500">
              Fill out the form below with your name, email, and message, and we’ll get back to you as soon as possible.
              </p>
            </div>

            <div className="mt-10">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <div className="mt-2">
                    <input
                      id="Name"
                      name="Name"
                      type="text"
                      require
                      placeholder='Name'
                      className="block w-full rounded-md border-0 py-4 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      id="Email"
                      name="Email"
                      type="Email"
                      required
                      placeholder='Email'
                      className="block w-full rounded-md border-0 py-4 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                    <div className="mt-2 mb-20">
                        <input
                        id="Email"
                        name="Email"
                        type="text"
                        required
                        placeholder="Messsage...."
                        className="block w-full rounded-md border-0 py-6 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#1D7BC7] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                   Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:overflow-hidden">
  <img
    src={People}
    alt="People"
    className="w-3/4 h-auto max-w-none rounded-tr-[20%] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] object-cover"
  />
</div>

      </div>
    </>
  );
}
