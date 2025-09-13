// pages/index.js
import Image from 'next/image';
//It seems that we might need more time to complete this task effectively. hne

export default function Home() {
	return (
		<div style={{ width: '98vw', height: '100vh', position: 'relative' }}>
			<Image
				src='/dashboard.png'
				alt='Dashboard'
				fill
				style={{ objectFit: 'cover' }}
			/>
		</div>
	);
}
