import { create } from "zustand";
import axios from "axios";

const API_BASE = "http://20.244.56.144/evaluation-service";

const useSocialMediaStore = create((set, get) => ({
  users: {},
  posts: [],
  comments: {},
  
  fetchUsers: async () => {
    const response = await axios.get(`${API_BASE}/users`);
    set({ users: response.data.users });
  },

  fetchPostsForUser: async (userId) => {
    const response = await axios.get(`${API_BASE}/users/${userId}/posts`);
    return response.data.posts;
  },

  fetchCommentsForPost: async (postId) => {
    const response = await axios.get(`${API_BASE}/posts/${postId}/comments`);
    set((state) => ({
      comments: { ...state.comments, [postId]: response.data.comments },
    }));
  }
}));

export default useSocialMediaStore;
