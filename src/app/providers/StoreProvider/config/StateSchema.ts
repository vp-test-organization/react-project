import { type ReducerState } from 'react';
import type { NavigateOptions, To } from 'react-router-dom';
import type { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type CounterSchema } from 'entities/Counter';

export type StateSchema = {
	counter: CounterSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: Action) => ReducerState<Reducer<StateSchema, Action>>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
};

export type ReduxStoreWithManager = {
	reducerManager: ReducerManager;
} & EnhancedStore<StateSchema>;

export type ThunkExtraArg = {
	api: AxiosInstance;
	navigate?: (to: To, Options?: NavigateOptions) => void;
};

export type ThunkConfig<T> = {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
};