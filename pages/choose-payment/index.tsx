import PaymentMethod from '../../components/molecules/PaymentMethod';
import PaymentMethodCategory from '../../components/molecules/PaymentMethodCategory';
import paymentDatas from '../api/payment-methods';

export default function ChoosePayment() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div>
				{
					paymentDatas.map((paymentData, id) => (
						<>
							<PaymentMethodCategory key={id} category={paymentData.categoryName} />
							{
								paymentData.items.map((item) => (
									<PaymentMethod key={item.index} title={item.title} balance={item.balance} points={item.point} logo={item.logo}/>
								))
							}
						</>
					))
				}
			</div>
		</div>
	);
}
