import Image from 'next/image';

interface itemProps {
	category : string
	name?: string
	image: string;
	balance?: number;
	point?: number
}

export default function PaymentMethodItems(props: itemProps) {

	const { category, name, image, balance, point } = props;

	return (
		<>
			<div className="font-bold">
				<p>{category}</p>
			</div>
			<div className="flex items-center">
				<div className="p-3">
					<Image src={image} width={40} height={40}></Image>
				</div>
				<div className="font-medium">
					<p>{balance}</p>
					<p>{point}</p>
					<p>{name}</p>
				</div>
			</div>
		</>
	);
}