import { StringHelper } from 'business-layer/services/helpers/string.helper';
import PostService from 'business-layer/services/post.service';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const lang = require('presentation-layer/languages/fa.json');
interface IPostPage {}
const PostPage: FC<IPostPage> = () => {
	const params = useParams();
	const id = String(params.id);
	const [post, setPost] = useState<any>('');
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		async function fetchAPI() {
			let result = await PostService.Get(id);
			console.log(result);
			setPost(result);
			setIsLoading(false);
		}
		if (id !== 'undefined') {
			fetchAPI();
		}
	}, []);
	return isLoading ? (
		<>
			<p>{lang['MESSAGE']['LOADING']}</p>
		</>
	) : !post ? (
		<p>{lang['API']['EMPTY']}</p>
	) : (
		<div>
			<h1>[تصویر]</h1>
			<h1>{StringHelper.parseHTMLString(post.title.rendered)}</h1>
			<h2>{lang['DATE']}</h2>
			<p>{StringHelper.parseToJalaliDate(StringHelper.parseISOStringtoDate(post.date_gmt))}</p>
			<h2>{lang['TIME']}</h2>
			<p>{StringHelper.parseISOStringtoTime(post.date)}</p>
			<p>{StringHelper.parseHTMLString(post.content.rendered)}</p>
			<h2>[{lang['CATEGORY']}]</h2>
			<h2>[{lang['TAG']}]</h2>
			<h2>[{lang['COMMENTS']}]</h2>
		</div>
	);
};
export default PostPage;
