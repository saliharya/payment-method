import PaymentMethod from '../../components/molecules/PaymentMethod';
import paymentDatas from '../api/payment-methods';

export default function ChoosePayment() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="">
				{
					paymentDatas.map((paymentData) => (
						<PaymentMethod key={paymentData.id} category={paymentData.categoryName}  />
					))
				}
			</div>
		</div>
	);
}
