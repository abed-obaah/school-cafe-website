import { ShareIcon, CalculatorIcon } from '@heroicons/react/24/outline';

export default function Example() {
  const cardContents = [
    'What is DELSU?',
    'How To Pass Jamb',
    'Best University For Medicine',
    'First University',
    'What is WAEC?',
    'BIU Press',
    'Scholarship Opportunities for Students',
    'Study Abroad: What You Need to Know',
    'Choosing the Right University',
    'Career Paths After University',
    'How to Handle University Life',
    'Best Study Techniques for Exams',
  ];

  return (
    <section className="p-8 ">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-2xl font-bold mb-4">
            Get Our Experts To Answer Your Questions Within 24hrs
          </h2>
          {/* <h3 className="text-white">View all</h3> Add text color if needed */}
        </div>
        <div className="mt-12 flex flex-wrap gap-6 justify-startr">
          {cardContents.map((content, index) => (
            <div 
              key={index} 
              className="inline-flex items-center justify-center bg-[#00172A] p-2 rounded-full text-xs font-medium text-white"
              style={{ minWidth: '60px' }} // Adjust the minWidth as needed
            >
              {content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
