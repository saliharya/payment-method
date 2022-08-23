import Link from 'next/link';

export default function Button() {
	return (
		<div className="flex items-center justify-center h-screen">
			<Link href='/choose-payment'>
				<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Choose Payment
				</button>
			</Link>
		</div>
	);
}
