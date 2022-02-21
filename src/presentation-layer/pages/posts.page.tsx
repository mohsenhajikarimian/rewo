import { StringHelper } from 'business-layer/services/helpers/string.helper';
import PostService from 'business-layer/services/post.service';
import HTMLReactParser from 'html-react-parser';
import PostCard from 'presentation-layer/components/card';
import { FC, useEffect, useState } from 'react';
const lang = require('presentation-layer/languages/fa.json');
interface IPostsPage {}
const PostsPage: FC<IPostsPage> = () => {
	const [posts, setPosts] = useState<any>('');
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		async function fetchAPI() {
			let result = await PostService.GetAll();
			setPosts(result);
			setIsLoading(false);
		}
		fetchAPI();
	}, []);
	return isLoading ? (
		<p>{lang['MESSAGE']['LOADING']}</p>
	) : !posts ? (
		<p>{lang['API']['EMPTY']}</p>
	) : (
		posts.map((post: any) => {
			return (
				<PostCard
					id={post.id}
					title={post.title.rendered}
					content={HTMLReactParser(
						StringHelper.parseHTMLStringRemovedTags(
							StringHelper.truncate(post.content.rendered, 300, true)
						)
					)}
					buttonText='بیشتر...'
					onClick={'/posts/' + post.id}
				/>
			);
		})
	);
};
export default PostsPage;
