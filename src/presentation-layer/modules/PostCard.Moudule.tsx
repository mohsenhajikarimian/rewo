import Card from 'presentation-layer/components/card';
const lang = require('presentation-layer/languages/fa');
function CardPost(props: any) {
	return (
		<>
			<Card
				imageSrc=''
				title={props.title}
				content={props.content}
				buttonText={lang[' BUTTON']['SEE']}
				onClick={'/post/' + props.id}
			/>
			<hr />
		</>
	);
}

export default CardPost;
