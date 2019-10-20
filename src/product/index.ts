import { listFeature, getFeature, createFeature } from '../_generic/features';
import { ProductListType, ProductGetType, ProductCreateType } from './types';

const API_URL = '/cliente';

export const listProducts: ProductListType = listFeature(API_URL);
export const getProduct: ProductGetType = getFeature(API_URL);
export const createProduct: ProductCreateType = createFeature(API_URL);
