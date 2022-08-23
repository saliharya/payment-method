import PaymentMethod from '../../components/molecules/PaymentMethod';
import paymentDatas from '../api/payment-methods';

export default function ChoosePayment() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div>
				{
					paymentDatas.map((paymentData) => (
						<PaymentMethod key={paymentData.id}
							category={paymentData.categoryName}
							image={paymentData.items[0].logo}
							name={paymentData.items[0].title}
							balance={paymentData.items[0].balance}
							point={paymentData.items[0].point} />
					))
				},
			</div>
		</div>
	);
}
