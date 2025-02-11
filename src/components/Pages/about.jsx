import Mission from './mission';
import Card from '../cards/offer';
import Community from '../community'
export default function Example() {
    return (
      <><div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">All You Need To Know <span className="text-[#1D7BC7]">About Us </span></h2>
                <p className="mt-6 text-2xl leading-8 text-gray-600">
                    Welcome to <span className="text-[#1D7BC7]">School Cafe! </span>
                </p>
                <p className="mt-3 text-lg leading-8 text-gray-600">
                In alignment with God’s wisdom, School Cafe’s mission transcends traditional educational services.

                    We believe that every student deserves access to quality information and resources that can transform their academic journey.

                    Our work is a ministry guided by faith and dedicated to serving Nigeria’s educational community.
                </p>
            </div>
           
        </div>
        <Mission />
        <Card />
     




            
        <Community/>
        </>
    )
  }
  