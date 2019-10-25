import { SaleListType, SaleGetType, SaleCreateType, SaleCancelType } from './types';
import { listFeature, getFeature, createFeature, cancelFeature } from '../_generic/features';
import { mapSale } from './util';

const API_URL = '/vendas';

export const listSales: SaleListType = listFeature(API_URL);
export const getSale: SaleGetType = getFeature(API_URL);
export const createSale: SaleCreateType = createFeature(API_URL, mapSale);
export const cancelSale: SaleCancelType = cancelFeature(API_URL);
