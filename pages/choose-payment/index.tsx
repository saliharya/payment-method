import PaymentMethod from '../../components/molecules/PaymentMethod';

const paymentDatas = [
	{
		id: 0,
		categoryName:'Pembayaran via Tokopedia',
		items: [
			{
				logo: '/pngwing.com.png',
				balance: 0,
				point: 0
			},
			{
				logo: '/pngwing.com.png',
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
				title: 'Direct Debit BRI'
			},
			{
				logo: '/pngwing.com.png',
				title: 'OneKlik'
			},
			{
				logo: '/pngwing.com.png',
				title: 'OCTO CIMB Niaga'
			},
			{
				logo: '/pngwing.com.png',
				title: 'Debit Mandiri'
			},
		]
	},
	{
		id: 2,
		categoryName: 'Kartu Kredit / Debit',
		items : [
			{
				logo: '/pngwing.com.png',
				title: 'Kartu Kredit / Debit'
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
						<PaymentMethod key={paymentData.id} category={paymentData.categoryName}/>
					))
				}
			</div>
		</div>
	);
}
