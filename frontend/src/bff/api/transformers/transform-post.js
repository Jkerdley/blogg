export const transformPost = (dbPost) => ({
	id: dbPost.id,
	title: dbPost.title,
	imageUrl: dbPost.img_url,
	content: dbPost.content,
	createdAt: dbPost.createdAt,
});
