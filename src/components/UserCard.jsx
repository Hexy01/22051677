const UserCard = ({ user }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={`https://i.pravatar.cc/100?u=${user.id}`} 
            alt={user.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-600">Posts: {user.postCount}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserCard;
  