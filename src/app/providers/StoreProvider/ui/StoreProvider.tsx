import { type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '../config/StateSchema';
import createReduxStore from '../config/store';

type StoreProviderProps = {
	children?: ReactNode;
	initialState?: StateSchema;
	asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
};

const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
	const navigate = useNavigate();
	const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>, navigate);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default StoreProvider;
