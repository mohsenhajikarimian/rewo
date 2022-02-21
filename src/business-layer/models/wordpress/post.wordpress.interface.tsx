import IContent from './content.wordpress.interface';
import IExcerpt from './excerpt.wordpress.interface';
import IGuid from './guid.wordpress.interface';
import ITitle from './title.wordpress.interface';
import ILinks from './_links.wordpress.interface';

interface IPost {
	id: number;
	date: string;
	date_gmt: string;
	guid: IGuid;
	modified: string;
	modified_gmt: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: ITitle;
	content: IContent;
	excerpt: IExcerpt;
	author: number;
	featured_media: number;
	comment_status: string;
	ping_status: string;
	sticky: boolean;
	template: string;
	format: string;
	meta: any[];
	categories: number[];
	tags: any[];
	_links: ILinks;
}
export default IPost;
