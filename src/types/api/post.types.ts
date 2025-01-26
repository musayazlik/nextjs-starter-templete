// src/types/api/post.types.ts

/**
 * Basic data structure for a blog post.
 * @property id - Unique ID of the post
 * @property title - Post title
 * @property content - Post content
 * @property author - Post author
 * @property date - Post date (in ISO format)
 * @property tags - Post tags
 * @property image - Post image (URL)
 */
export interface BlogPost {
	id: string;
	title: string;
	content: string;
	author: string;
	date: string;
	tags?: string[];
	image?: string;
}

/**
 * Request type for creating a new post.
 * @property title - Post title
 * @property content - Post content
 * @property author - Post author
 * @property tags - Post tags
 * @property image - Post image (URL)
 */
export interface CreatePostRequest {
	title: string;
	content: string;
	author: string;
	tags?: string[];
	image?: string;
}

/**
 * Request type for updating a post.
 * @property title - Post title (optional)
 * @property content - Post content (optional)
 * @property tags - Post tags (optional)
 * @property image - Post image (URL, optional)
 */
export interface UpdatePostRequest {
	title?: string;
	content?: string;
	tags?: string[];
	image?: string;
}

/**
 * Pagination information for post list.
 * @property page - Current page number
 * @property limit - Posts per page
 * @property total - Total number of posts
 */
export interface PostPagination {
	page: number;
	limit: number;
	total: number;
}

/**
 * Post list API response.
 * @property posts - List of posts
 * @property pagination - Pagination information
 */
export interface PostListResponse {
	posts: BlogPost[];
	pagination: PostPagination;
}

/**
 * Single post API response.
 * @property post - Post detail
 */
export interface PostResponse {
	post: BlogPost;
}

/**
 * Delete post API response.
 * @property success - Whether the operation was successful
 * @property message - Optional message
 */
export interface DeletePostResponse {
	success: boolean;
	message?: string;
}
