import { Link } from 'react-router-dom';
import { Button } from 'presentation-layer/components/button';
import './index.css';
function PostCard(props: any) {
	return (
		<div className='PostCard'>
			{props.imageSrc && <img src={props.imageSrc} alt={props.title} />}
			<Link to={props.onClick}>{props.title && <h2>{props.title}</h2>}</Link>
			{props.content && <p>{props.content}</p>}
			{props.buttonText && (
				<div className='d-grid gap-2 d-md-flex justify-content-md-end'>
					<Link to={props.onClick}>
						<Button text={props.buttonText} />
					</Link>
				</div>
			)}
		</div>
	);
}
export default PostCard;
