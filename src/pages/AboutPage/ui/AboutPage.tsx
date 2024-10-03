import { memo } from 'react';
import Container from 'shared/ui/Container/Container';

const AboutPage = memo(() => {
	return (
		<section>
			<Container>
				<h1 className='section-title'>About page</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, recusandae!</p>
			</Container>
		</section>
	);
});

export default AboutPage;
