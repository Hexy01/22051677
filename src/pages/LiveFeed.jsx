import { useEffect, useState } from "react";
import useSocialMediaStore from "../store/useSocialMediaStore";
import PostCard from "../components/PostCard";

const LiveFeed = () => {
  const { fetchPostsForUser, users, fetchUsers } = useSocialMediaStore();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      await fetchUsers();
      const allPosts = [];

      for (let userId in users) {
        const posts = await fetchPostsForUser(userId);
        allPosts.push(...posts);
      }

      setFeed(allPosts.sort((a, b) => b.id - a.id));
    };

    loadFeed();

    const interval = setInterval(loadFeed, 5000);
    return () => clearInterval(interval);
  }, [users]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
      {feed.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default LiveFeed;
