
const PostSection = () => {
    return (
        <div className="p-8 space-y-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">DELSU RESUMPTION</h3>
            <a href="#" className="text-blue-500">Related Topics →</a>
          </div>
          <div className="mt-4 flex space-x-4 items-start">
            <img 
              src="user-profile-pic-url" 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Tejiri Simon</p>
              <p className="text-sm">Hey Guys, Please, I will love to find out if the official calendar...</p>
              <div className="mt-4 flex space-x-2">
                <button className="text-gray-500">Reply</button>
                <button className="text-gray-500">Share</button>
              </div>
            </div>
          </div>
        </div>
      
        {/* Duplicate for another post */}
      </div>
    );
  };
  
  export default  PostSection;
  
