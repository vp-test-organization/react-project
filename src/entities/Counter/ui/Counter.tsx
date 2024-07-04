import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.module.scss';
import { counterActions } from '../model/slice/counterSlice';
import getCounterValue from '../model/selectors/getCounterValue/getCounterValue';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

const Counter = memo(() => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	return (
		<div className={styles.counter}>
			<h1 data-testid='counter-title'>Counter: {counterValue}</h1>
			<div className={styles.counter__row}>
				<Button theme={ButtonTheme.OUTLINE} onClick={decrementHandler} data-testid="counter-decrement-btn">Decrement</Button>
				<Button theme={ButtonTheme.OUTLINE} onClick={incrementHandler} data-testid="counter-increment-btn">Increment</Button>
			</div>
		</div>
	);
});

export default Counter;
