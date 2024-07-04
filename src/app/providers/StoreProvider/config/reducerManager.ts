import { type Action, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import type { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>): ReducerManager => {
	const reducers = { ...initialReducers };
	let combinedReducer = combineReducers(reducers);
	let keysToRemove: StateSchemaKey[] = [];

	return {
		getReducerMap: () => reducers,
		reduce: (state: StateSchema, action: Action) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
				for (let key of keysToRemove) {
					// @ts-ignore
					delete state[key];
				}
				keysToRemove = [];
			}

			// @ts-ignore
			return combinedReducer(state, action);
		},
		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) return;

			reducers[key] = reducer;
			combinedReducer = combineReducers(reducers);
		},
		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) return;

			// @ts-ignore
			delete reducers[key];
			keysToRemove.push(key);
			combinedReducer = combineReducers(reducers);
		},
	};
};