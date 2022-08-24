const paymentDatas = [
	{
		id: 0,
		categoryName: 'Pembayaran via Tokopedia',
		items: [
			{
				index : 0,
				logo: '/gopay.png',
				balance: 1,
				point: 1
			},
			{
				index: 1,
				logo: '/ovo.svg',
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
				index: 0,
				logo: '/BRIDirectDebit.png',
				title: 'Direct Debit BRI',
			},
			{
				index: 1,
				logo: '/OneKlik.png',
				title: 'OneKlik',
			},
			{
				index: 2,
				logo: '/octo.svg',
				title: 'OCTO CIMB Niaga',
			},
			{
				index: 3,
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
				index: 0,
				logo: '/cc.svg',
				title: 'Kartu Kredit / Debit',
			},
		]
	},
];

export default paymentDatas;