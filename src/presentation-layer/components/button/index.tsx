export const Button = (props: any) => {
	return (
		<a href={props.url} className='btn btn-primary' role='button' aria-disabled='true'>
			{props.text}
		</a>
	);
};
