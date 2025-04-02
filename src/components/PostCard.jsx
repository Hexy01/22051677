const PostCard = ({ post }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg mb-4">
        <div className="flex items-center space-x-4 mb-2">
          <img
            src={`https://picsum.photos/100?random=${post.id}`} 
            alt="Post"
            className="w-16 h-16 rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-gray-800">Post ID: {post.id}</h3>
            <p className="text-gray-600">{post.content}</p>
          </div>
        </div>
        {post.commentCount !== undefined && (
          <p className="text-blue-600 font-medium mt-2">
            Comments: {post.commentCount}
          </p>
        )}
      </div>
    );
  };
  
  export default PostCard;
  