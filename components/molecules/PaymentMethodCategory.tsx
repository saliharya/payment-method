interface itemCategoryProps {
    category: string
}

export default function PaymentMethodCategory(props: itemCategoryProps) {

	const { category } = props;

	return (
		<>
			<div className="font-bold">
				<p>{category}</p>
			</div>
		</>
	);
}
