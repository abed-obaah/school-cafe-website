import { ShareIcon, CalculatorIcon } from '@heroicons/react/24/outline';

const posts = [
  {
    title: 'Aggregate',
    Subtitle: 'Calculator',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'This software helps to calculate the Aggregate or final result for students.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'CGPA',
    Subtitle: 'Calculator',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Calculate the GPA and CGPA of University/Polytechnic students.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'School Courses',
    Subtitle: 'Finder',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Find courses offered by different institutions.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Example() {
  return (
    <section className="p-8 bg-[#00172A]">
      <div className="relative mx-auto max-w-7xl">
              <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold mb-4">Tools</h2>
          <h3 className="text-white">View all</h3> {/* Add text color if needed */}
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="mt-4 flex justify-between items-center">
                  {/* Calculator icon */}
                  <div className="flex items-center bg-blue-500 p-4 rounded-full">
                    <CalculatorIcon className="h-6 w-6 text-white" />
                  </div>
                  {/* Share icon */}
                  <div className="flex items-center">
                    <ShareIcon className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <a href={post.href} className="mt-2 block">
                    <p className="text-[36px] font-semibold text-gray-900">{post.title}</p>
                    <p className="text-[36px] font-semibold text-gray-900">{post.Subtitle}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
              <button className="mt-4 sm:mt-0 bg-[#1D7BC7] text-white px-4 py-2 rounded">Access Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
   
    </section>
  )
}
