import Image from 'next/image';

interface itemProps {
	title?:string;
	balance?:number;
	points?:number;
	logo:string;
}

export default function PaymentMethod(props: itemProps) {

	const { title, balance, points, logo } = props;

	return (
		<>
			<div className="flex items-center">
				<div className="p-3">
					<Image src={logo} width={40} height={40}></Image>
				</div>
				<div className="font-medium">
					{balance?<p>Rp {balance}</p> : null}
					{title ? <p>{title}</p> : null}
					{points ? <p>Points {points}</p> : null}
				</div>
			</div>
		</>
	);
}

{/* <p>{title}</p>
<p>Rp {balance}</p>
<p>Points {points}</p> */}