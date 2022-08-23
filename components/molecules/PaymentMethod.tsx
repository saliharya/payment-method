import Image from 'next/image';

interface itemProps {
	name? : string
    image : string;
    balance? : number;
    point? : number
}

export default function PaymentMethod(props:itemProps) {

	const {name, image, balance, point} = props;

	return (
		<div className="flex items-center">
			<div className="p-3">
				<Image src={image} width={40} height={40}></Image>
			</div>
			<div className="font-bold">
				<p>{balance}</p>
				<p>{point}</p>
				<p>{name}</p>
			</div>
		</div>
	);
}
