import { create } from "zustand";
import { BlogPost } from "@/types/api/post.types";

interface PostState {
	posts: BlogPost[];
	loading: boolean;
	error: string | null;
	fetchPosts: () => Promise<void>;
	addPost: (post: BlogPost) => void;
}

export const usePostStore = create<PostState>((set) => ({
	posts: [],
	loading: false,
	error: null,
	fetchPosts: async () => {
		set({ loading: true, error: null });
		try {
			const response = await fetch("/api/posts");
			const data = await response.json();
			set({ posts: data, loading: false });
		} catch (error: unknown) {
			set({
				error: error instanceof Error ? error.message : "Failed to fetch posts",
				loading: false,
			});
		}
	},
	addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
}));
