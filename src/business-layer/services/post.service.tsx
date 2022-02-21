import BaseService from 'business-layer/services/_service';
const PostService = {
	Create: () => {},
	Get: async (id: string) => {
		return BaseService.ReadById('posts/', id);
	},
	GetAll: async () => {
		return BaseService.ReadAll('posts/');
	},
	Update: (id: string, data: string) => {},
	Delete: (id: string) => {},
};
export default PostService;
