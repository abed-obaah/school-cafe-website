import Mission from './mission';
import Card from '../cards/offer';
import Community from '../community'
export default function Example() {
    return (
      <><div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">All You Need To Know <span className="text-[#1D7BC7]">About Us </span></h2>
                <p className="mt-6 text-2xl leading-8 text-gray-600">
                    Welcome to <span className="text-[#1D7BC7]">School Cafe! </span>
                </p>
                <p className="mt-3 text-lg leading-8 text-gray-600">
                    At School Cafe, we’re dedicated to bringing you the latest news, insights, and stories that matter most to students and NYSC members across the country. Whether you're looking for academic tips, updates on the National Youth Service Corps (NYSC), or engaging student-related content, we’re your go-to source.
                </p>
            </div>
           
        </div>
        <Mission />
        <Card />
        <Community/>
        </>
    )
  }
  