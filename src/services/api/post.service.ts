// src/services/api/post.service.ts
import { BlogPost, CreatePostRequest } from "@/types/api/post.types";
import { ApiResponse, Pagination } from "@/types/api/common.types";
import { apiClient} from "@/lib/api/client";

export const PostService = {
  async getPosts(page: number = 1, limit: number = 10): Promise<{ posts: BlogPost[]; pagination: Pagination }> {
    const { data } = await apiClient.get<ApiResponse<{ posts: BlogPost[]; pagination: Pagination }>>(
      "/posts",
      { params: { page, limit } }
    );
    return data;
  },

  async createPost(post: CreatePostRequest): Promise<BlogPost> {
    const { data } = await apiClient.post<ApiResponse<BlogPost>>("/posts", post);
    return data;
  },
};