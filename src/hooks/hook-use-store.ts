import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { AppDispatch, State } from '../types/types-store';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;
const useAppDispatch = useDispatch<AppDispatch>;

export {useAppSelector, useAppDispatch};
