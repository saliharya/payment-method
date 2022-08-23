import PaymentMethod from '../../components/molecules/PaymentMethod';

const paymentDatas = [
	{
		id: 0,
		logo: '/pngwing.com.png',
		balance: 0,
		point: 0
	},
	{
		id: 1,
		logo: '/pngwing.com.png',
		balance: 112675,
		point: 5000
	},
	{
		id: 2,
		logo: '/pngwing.com.png',
		name : 'Direct Debit BRI'
	},
	{
		id: 3,
		logo: '/pngwing.com.png',
		name: 'OneKlik'
	},
	{
		id: 4,
		logo: '/pngwing.com.png',
		name: 'OCTO CIMB Niaga'
	},
	{
		id: 5,
		logo: '/pngwing.com.png',
		name: 'Debit Mandiri'
	},
	{
		id: 6,
		logo: '/pngwing.com.png',
		name: 'Kartu Kredut / Debit'
	},
];

export default function ChoosePayment() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="">
				<h1>Pilih Metode Pembayaran</h1>
				<h4>Pembayaran di Tokopedia</h4>
				<div className="flex">
				</div>
				<h4>Debit Instan</h4>
				{
					paymentDatas.map((paymentData) => (
						<PaymentMethod key={paymentData.id} image={paymentData.logo} balance={paymentData.balance} point={paymentData.point} />
					))
				}
				<h4>Kartu Kredit/Debit</h4>
			</div>
		</div>
	);
}
