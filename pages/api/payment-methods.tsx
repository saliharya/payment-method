const paymentDatas = [
	{
		id: 0,
		categoryName: 'Pembayaran via Tokopedia',
		items: [
			{
				logo: '/gopay.png',
				title: '',
				balance: 0,
				point: 0
			},
			{
				logo: '/ovo.svg',
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
				logo: '/BRIDirectDebit.png',
				title: 'Direct Debit BRI',
			},
			{
				logo: '/OneKlik.png',
				title: 'OneKlik',
			},
			{
				logo: '/octo.svg',
				title: 'OCTO CIMB Niaga',
			},
			{
				logo: '/debitMandiri.png',
				title: 'Debit Mandiri',
			},
		]
	},
	{
		id: 2,
		categoryName: 'Kartu Kredit / Debit',
		items: [
			{
				logo: '/cc.svg',
				title: 'Kartu Kredit / Debit',
			},
		]
	},
];

export default paymentDatas;