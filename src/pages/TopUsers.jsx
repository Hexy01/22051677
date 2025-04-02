import { useEffect, useState } from "react";
import useSocialMediaStore from "../store/useSocialMediaStore";
import UserCard from "../components/UserCard";

const TopUsers = () => {
  const { users, fetchUsers, fetchPostsForUser } = useSocialMediaStore();
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      await fetchUsers();
      const postCounts = await Promise.all(
        Object.keys(users).map(async (id) => {
          const posts = await fetchPostsForUser(id);
          return { id, name: users[id], postCount: posts.length };
        })
      );
      setTopUsers(postCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5));
    };

    loadUsers();
  }, [users, fetchUsers, fetchPostsForUser]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Top Users</h2>
      {topUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default TopUsers;
