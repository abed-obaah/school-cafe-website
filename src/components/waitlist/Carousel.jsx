// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation,Autoplay } from 'swiper/modules'; // Correct way to import Navigation
// import 'swiper/css';
// import 'swiper/css/navigation'; // Import Swiper navigation module
import smiley from '../../assets/simley.jpg'
import smiley2 from '../../assets/smiley2.jpg'
import smiley3 from '../../assets/smiley3.jpg'
import smiley4 from '../../assets/smiley4.jpg'
// import smiley5 from '../../assets/smiley5.jpg'

const posts = [
  {
    id: 1,
    imageUrl:
    smiley,
  },
  {
    id: 2,
    imageUrl:
    smiley2 ,
  },
  {
    id: 3,
    imageUrl:
    smiley3,
  },
  {
    id: 3,
    imageUrl:
    smiley4 ,
  },
  {
    id: 1,
    imageUrl:
    smiley,
  },
  {
    id: 2,
    imageUrl:
    smiley2 ,
  },
  {
    id: 3,
    imageUrl:
    smiley3,
  },
  {
    id: 3,
    imageUrl:
    smiley4 ,
  },
  // Add more posts...
];

export default function Example() {
  return (
    <div className="bg-white py-20 sm:py-10">
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
                  className="h-[430px] w-full object-cover rounded-xl" // Adjust styles as necessary
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
