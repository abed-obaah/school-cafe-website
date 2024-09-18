import React from 'react';

export default function MainComponent() {
  const testimonials = [
    {
      body: 'Attending UNILAG has been an incredible experience. The teachers are dedicated, the curriculum is challenging yet engaging, and the community is supportive. I\'ve grown academically and personally, gaining skills and confidence that will stay with me for life. UNILAG truly prepares students for success!',
      author: {
        name: 'Leslie Alexander',
        handle: 'University Of Lagos',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      status: 'Alumni'
    },
    {
      body: 'Attending UNILAG has been an incredible experience. The teachers are dedicated, the curriculum is challenging yet engaging, and the community is supportive. I\'ve grown academically and personally, gaining skills and confidence that will stay with me for life. UNILAG truly prepares students for success!',
      author: {
        name: 'John Doe',
        handle: 'University Of Lagos',
        imageUrl:
          'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      status: 'Alumni'
    },
    {
      body: 'Attending UNILAG has been an incredible experience. The teachers are dedicated, the curriculum is challenging yet engaging, and the community is supportive. I\'ve grown academically and personally, gaining skills and confidence that will stay with me for life. UNILAG truly prepares students for success!',
      author: {
        name: 'Jane Doe',
        handle: 'University Of Lagos',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      status: 'Student'
    },
    {
      body: 'Attending UNILAG has been an incredible experience. The teachers are dedicated, the curriculum is challenging yet engaging, and the community is supportive. I\'ve grown academically and personally, gaining skills and confidence that will stay with me for life. UNILAG truly prepares students for success!',
      author: {
        name: 'Jane Doe',
        handle: 'University Of Lagos',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      status: 'Corper'
    },
    {
      body: 'Attending UNILAG has been an incredible experience. The teachers are dedicated, the curriculum is challenging yet engaging, and the community is supportive. I\'ve grown academically and personally, gaining skills and confidence that will stay with me for life. UNILAG truly prepares students for success!',
      author: {
        name: 'Jane Doe',
        handle: 'University Of Lagos',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      status: 'Student'
    },
    {
      body: 'Attending UNILAG has been an incredible experience. The teachers are dedicated, the curriculum is challenging yet engaging, and the community is supportive. I\'ve grown academically and personally, gaining skills and confidence that will stay with me for life. UNILAG truly prepares students for success!',
      author: {
        name: 'Jane Doe',
        handle: 'University Of Lagos',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      status: 'Corper'
    },
  ];

  // Function to return the appropriate class based on the status
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Alumni':
        return 'inline-flex items-center rounded-full bg-black px-4 py-0.5  text-xs font-regular text-white ring-1 ring-inset ring-gray-500/10';
      case 'Student':
        return 'inline-flex items-center rounded-full bg-yellow-50 px-4 py-0.5 text-xs font-regulartext-yellow-800 ring-1 ring-inset ring-yellow-600/20';
      case 'Corper':
        return 'inline-flex items-center rounded-full bg-green-50 px-4 py-0.5  text-xs font-regular text-green-700 ring-1 ring-inset ring-green-600/20';
      default:
        return '';
    }
  };

  return (
    <div className="py-10 px-2 sm:px-2 lg:px-2">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">
          <div className="flex justify-between items-center">
            <div className="mb-4">
              <h2 className="text-black text-3xl font-bold">Testimonials</h2>
              <p className="text-[#888888] text-lg">Find out what students and</p>
              <p className="text-[#888888] text-lg">corpers are saying.</p>
            </div>
          </div>
          {/* Update the grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <figcaption className="flex gap-x-2">
                    <img
                      alt={testimonial.author.name}
                      src={testimonial.author.imageUrl}
                      className="h-12 w-12 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-regular text-[#696969] text-sm">{testimonial.author.name}</div>
                      <div className="text-[#696969]  text-xs">{`${testimonial.author.handle}`}</div>
                      <div className={getStatusStyle(testimonial.status)}>
                        {testimonial.status}
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="mt-4 text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
