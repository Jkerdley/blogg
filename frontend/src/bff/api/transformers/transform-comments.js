export const transformComments = (dbComment) => ({
	id: dbComment.id,
	author: dbComment.author_id,
	postId: dbComment.post_id,
	content: dbComment.content,
	createdAt: dbComment.createdAt,
});
