import Avatar from '../../../assets/avatar.svg';
import Heart from '../../../assets/heart.svg';
import Share from '../../../assets/share.svg';
import Comment from '../../../assets/comment.svg';
// import Tint from '../../../assets/tint.svg';

const posts = [
  {
    id: 1,
    title: "DELSU RESUMPTION",
    author: "Tejiri Simon",
    avatar: Avatar,
    timeAgo: "4hrs ago",
    content: "Hey Guys, Please, I will love to find out if the official calendar of delsu resumption is out because I heard the senate meeting was held yesterday but I haven’t been able to know if a date was agreed. Between anytime I remember second semester result my heart just dey skip like mad, I no know if na only me sha 😂😂😂.",
    level: "Gamma", // Added level
  },
  {
    id: 2,
    title: "DELSU RESUMPTION",
    author: "John Doe",
    avatar: Avatar,
    timeAgo: "2hrs ago",
    content: "Hey Guys, Please, I will love to find out if the official calendar of delsu resumption is out because I heard the senate meeting was held yesterday but I haven’t been able to know if a date was agreed. Between anytime I remember second semester result my heart just dey skip like mad, I no know if na only me sha 😂😂😂.",
    level: "Epsilon", // Added level
  },
  // Add more post objects as needed
];

const PostSection = () => {
  return (
    <div className="p-8 space-y-6 ">
      {posts.map((post) => (
        <div key={post.id} className="bg-[#EDF7FF] p-6 rounded-lg pb-20">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <a href="#" className="text-blue-500">
            Related Topics 
            <span className="inline-block transform -rotate-45 text-xl">→</span>
            </a>

          </div>
          <div className="mt-4 flex space-x-4 items-start">
            <img
              src={post.avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className='flex space-x-2'>
                <p className="font-semibold">{post.author}</p>
                <span className="inline-flex items-center rounded-md bg-[#CD7F32] px-1.5 py-0.5 text-xs font-medium text-white">
                  {post.level} {/* Displaying the level */}
                </span>
              </div>
              <p className="font-regular text-sm text-gray-500">{post.timeAgo}</p>
              <p className="text-sm">{post.content}</p>
              <div className="mt-4 flex space-x-2">
                <button className="text-gray-500 bg-[#FAFDFF] rounded-full p-2">
                  <img
                    src={Heart}
                    alt="Like"
                    className="w-6 h-6 rounded-full"
                  />
                </button>
                <button className="text-gray-500 bg-[#FAFDFF] rounded-full p-2">
                  <img
                    src={Share}
                    alt="Share"
                    className="w-6 h-6 rounded-full"
                  />
                </button>
                <div className="flex items-center bg-white rounded-full p-2 w-full max-w-lg">
                  <div className="text-gray-500 mr-2">
                    <img
                      src={Comment}
                      alt="Comment"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Response"
                    className="flex-grow bg-white border-none focus:outline-none rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
