import { useEffect, useState } from "react";
import useSocialMediaStore from "../store/useSocialMediaStore";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
  const { fetchPostsForUser, fetchCommentsForPost, users, fetchUsers } = useSocialMediaStore();
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const loadTrendingPosts = async () => {
      await fetchUsers();
      const postList = [];

      for (let userId in users) {
        const posts = await fetchPostsForUser(userId);
        for (let post of posts) {
          await fetchCommentsForPost(post.id);
          postList.push({ ...post, commentCount: useSocialMediaStore.getState().comments[post.id]?.length || 0 });
        }
      }

      const maxComments = Math.max(...postList.map((p) => p.commentCount));
      setTrendingPosts(postList.filter((p) => p.commentCount === maxComments));
    };

    loadTrendingPosts();
  }, [users]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      {trendingPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TrendingPosts;
