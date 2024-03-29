import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createApi } from '../services/services-api';
import { State } from './types-store';

 type AppThunkDispatch = ThunkDispatch<
  State,
  ReturnType<typeof createApi>,
  Action
>;
export type {AppThunkDispatch};
