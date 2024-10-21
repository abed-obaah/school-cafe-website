import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules'; // Correct way to import Navigation
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper navigation module

const posts = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // Add more posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Swiper Carousel */}
        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            // navigation={true} // Enable navigation arrows
            spaceBetween={20} // Space between slides
            slidesPerView={1} // Number of slides per view
            autoplay={{
              delay: 3000, // 3 seconds delay
              disableOnInteraction: false, // Keep autoplay even after interaction
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <img
                  src={post.imageUrl}
                  alt={`Slide ${post.id}`} // Provide an alt attribute for accessibility
                  className="h-full w-full object-cover rounded-xl" // Adjust styles as necessary
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
