import { memo } from 'react';
import Container from 'shared/ui/Container/Container';
import styles from './AboutPage.module.scss';

const AboutPage = memo(() => {
	return (
		<section>
			<Container>
				<h1 className='section-title'>About page</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at aut consectetur cum deserunt error eveniet facilis in praesentium, qui quo, rerum veritatis? Aut deserunt ea fuga laudantium nisi rem temporibus. Accusantium beatae, deleniti dignissimos ea esse ex, excepturi hic impedit, molestiae molestias nesciunt officia quia! Aliquid eaque eos excepturi facilis illum in laborum mollitia, quam unde. Autem consequatur et ex expedita maxime natus sed similique, soluta! Accusantium amet aspernatur cum cumque, doloremque eaque eum iure nam officiis, quisquam ratione similique suscipit unde veniam veritatis voluptates voluptatum. Aspernatur facilis mollitia, necessitatibus nisi repellat reprehenderit sunt tempora! Consectetur consequatur dicta distinctio facere labore laboriosam neque nihil nisi ullam veniam. Alias assumenda corporis deleniti deserunt dicta dolore dolores doloribus ducimus, ea earum eligendi eum excepturi expedita explicabo facilis fugiat illo iste minus natus neque nisi nobis nostrum nulla numquam obcaecati odio, quam quo quos ratione rem rerum saepe sed tempora tempore vel vero voluptate. A amet aspernatur aut commodi cum, dolorum ducimus enim expedita laborum, molestiae natus officia placeat quam quidem reiciendis rem reprehenderit sed ut veniam voluptatem! Dignissimos dolores dolorum expedita quas quibusdam sint ut veritatis. At, commodi delectus error eum laudantium maiores nobis possimus quibusdam tempora velit! Minus, veniam?
				</p>
				<div className={styles.test}></div>
			</Container>
		</section>
	);
});

export default AboutPage;
