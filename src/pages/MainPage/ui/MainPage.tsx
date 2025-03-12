import { memo } from 'react';
import Container from 'shared/ui/Container/Container';
import { Counter } from 'entities/Counter';

const MainPage = memo(() => {
	return (
		<section>
			<Container>
				<h1 className='section-title'>Main Page</h1>
				<h2 className='section-title'>Main Page</h2>
				<h3 className='section-title'>Main Page</h3>
				<Counter/>
			</Container>
		</section>
	);
});

export default MainPage;
