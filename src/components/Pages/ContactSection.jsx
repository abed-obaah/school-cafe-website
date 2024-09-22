import { BugAntIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Card from './card';
import Forms from '../Forms';

export default function Example() {
  return (
    <><div className="isolate bg-[#E9F5FF] px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                  We’d Love to Hear From You!
              </p>
          </div>
          <div className="mx-auto mt-20 max-w-4xl">
              <div className="flex justify-between">
                  {/* First Item: Sales Support */}
                  <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                          <ChatBubbleLeftRightIcon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900 mt-4">Email</h3>
                      <p className="mt-2 leading-7 text-gray-600 text-center text-sm">
                          help@schoolcafe.com
                      </p>
                      <p className=" leading-7 text-gray-600 text-center text-sm">
                          contactus@schoolcafe.com
                      </p>
                      <p className=" leading-7 text-gray-600 text-center text-sm">
                          admin@schoolcafe.com
                      </p>
                  </div>

                  {/* Second Item: Bug Reports */}
                  <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                          <ChatBubbleLeftRightIcon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900 mt-4">Phone Number</h3>
                      <p className="mt-2 leading-7 text-gray-600 text-center text-sm">
                          +234 701 451 4834
                      </p>
                      <p className=" leading-7 text-gray-600 text-center text-sm">
                          +234 701 451 4834
                      </p>
                      <p className=" leading-7 text-gray-600 text-center text-sm">
                          +234 701 451 4834
                      </p>
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                          <ChatBubbleLeftRightIcon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900 mt-4">Whatsapp</h3>
                      <p className="mt-2 leading-7 text-gray-600 text-center text-sm">
                          Whatsapp Community
                      </p>
                      <p className=" leading-7 text-gray-600 text-center text-sm">
                          Whatsappp Tv
                      </p>
                      <p className=" leading-7 text-gray-600 text-center text-sm">
                          Whatsapp Admin
                      </p>
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                          <ChatBubbleLeftRightIcon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900 mt-4">Connect</h3>
                      <p className="mt-2 leading-7 text-gray-600 text-center text-sm">
                          Twitter
                      </p>
                      <p className=" leading-7 text-gray-600 text-center text-sm">
                          Instagram
                      </p>
                      <p className=" leading-7 text-gray-600 text-center text-sm">
                          Facebook
                      </p>
                  </div>


              </div>
          </div>


      </div>
      <Card />
      <div className="mx-auto max-w-7xl mt-20 mb-20">
      <Forms/>
      </div>
     
      </>
  )
}
