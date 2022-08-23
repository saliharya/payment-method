import PaymentMethod from '../../components/molecules/PaymentMethod';

const paymentDatas = [
	{
		id: 0,
		categoryName:'Pembayaran via Tokopedia',
		items: [
			{
				logo: '/pngwing.com.png',
				title: '',
				balance: 0,
				point: 0
			},
			{
				logo: '/pngwing.com.png',
				title: '',
				balance: 112675,
				point: 5000
			},
		]
	},
	{
		id: 1,
		categoryName: 'Debit Instan',
		items: [
			{
				logo: '/pngwing.com.png',
				title: 'Direct Debit BRI',
				balance: 0,
				point: 0
			},
			{
				logo: '/pngwing.com.png',
				title: 'OneKlik',
				balance: 0,
				point: 0
			},
			{
				logo: '/pngwing.com.png',
				title: 'OCTO CIMB Niaga',
				balance: 0,
				point: 0
			},
			{
				logo: '/pngwing.com.png',
				title: 'Debit Mandiri',
				balance: 0,
				point: 0
			},
		]
	},
	{
		id: 2,
		categoryName: 'Kartu Kredit / Debit',
		items : [
			{
				logo: '/pngwing.com.png',
				title: 'Kartu Kredit / Debit',
				balance: 0,
				point: 0
			},
		]
	},
];

export default function ChoosePayment() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="">
				{
					paymentDatas.map((paymentData) => (
						<PaymentMethod key={paymentData.id} category={paymentData.categoryName} image={paymentData.items[0].logo} name={paymentData.items[0].title} balance={paymentData.items[0].balance} point={paymentData.items[0].point} />
					))
				}
			</div>
		</div>
	);
}
