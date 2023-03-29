import { atom } from 'jotai';
import { IProduct } from '../types/shoppingCart';

export const products = atom<IProduct[]>([]);
export const productsPage = atom(1);
