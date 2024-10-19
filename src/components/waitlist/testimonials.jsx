import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules'; // Correct way to import Navigation
import 'swiper/css';
import 'swiper/css/navigation';
import arrow from '../../assets/arrow-circle-left.svg'

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "This platform has been a game-changer for me. Managing my studies and finances used to feel overwhelming, but the guidance and tools provided here have made everything so much easier. From study tips to budgeting advice, I now feel more in control and confident about my future. I honestly don’t know how I would have gotten through my semester without their support!",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
        name: "Michael Foster",
        level:'DELSU, 300lv',
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "This platform has been a game-changer for me. Managing my studies and finances used to feel overwhelming, but the guidance and tools provided here have made everything so much easier. From study tips to budgeting advice, I now feel more in control and confident about my future. I honestly don’t know how I would have gotten through my semester without their support!",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
        name: "Michael Foster",
        level:'DELSU, 300lv',
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "This platform has been a game-changer for me. Managing my studies and finances used to feel overwhelming, but the guidance and tools provided here have made everything so much easier. From study tips to budgeting advice, I now feel more in control and confident about my future. I honestly don’t know how I would have gotten through my semester without their support!",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
        name: "Michael Foster",
        level:'DELSU, 300lv',
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "This platform has been a game-changer for me. Managing my studies and finances used to feel overwhelming, but the guidance and tools provided here have made everything so much easier. From study tips to budgeting advice, I now feel more in control and confident about my future. I honestly don’t know how I would have gotten through my semester without their support!",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
        name: "Michael Foster",
        level:'DELSU, 300lv',
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "This platform has been a game-changer for me. Managing my studies and finances used to feel overwhelming, but the guidance and tools provided here have made everything so much easier. From study tips to budgeting advice, I now feel more in control and confident about my future. I honestly don’t know how I would have gotten through my semester without their support!",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      level:'DELSU, 300lv',
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  
  // Add more posts...
];

export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex space-x-2 text-center justify-center mb-10">
              <img src={arrow} alt="Graduation Cap" className="w-6 h-6" />
              <p>Why Are People excited about us?</p>
            </div>
  
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hear how we’ve helped students navigate their journey with ease and confidence.
            </h2>
          </div>
  
          {/* Swiper Carousel */}
          <div className="mt-16 mx-auto sm:ml-4"> {/* Add left margin on smaller screens */}
            <Swiper
              modules={[Autoplay]} 
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 3000, // 3 seconds delay
                disableOnInteraction: false, // Keep autoplay even after interaction
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <article
                    className="relative flex flex-col justify-center items-start h-full overflow-hidden rounded-2xl border-2 border-[#B3B3B3] px-8 py-8"
                  >
                    <p className="mt-4 text-sm text-gray-700">{post.description}</p>
             
                    <div className="mt-auto flex flex-wrap items-center gap-y-1 text-sm leading-6 text-black">
                      <div className="-ml-4 flex items-center gap-x-4">
                        <svg
                          viewBox="0 0 2 2"
                          className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                        >
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        <div className="flex gap-x-3.5 mt-5">
                          <img
                            alt=""
                            src={post.author.imageUrl}
                            className="h-10 w-10 flex-none rounded-full bg-white/10"
                          />
                          <div className="flex flex-col justify-center">
                            <span>{post.author.name}</span>
                            <span className="text-[12px] text-gray-500">{post.author.level}</span> {/* Adjust the styling as needed */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
  