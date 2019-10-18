import { listFeature, getFeature, createFeature } from '../_generic/features';
import { CustomerListType, CustomerGetType, CustomerCreateType } from './types';

const API_URL = '/cliente';

export const listCustomers: CustomerListType = listFeature(API_URL);
export const getCustomer: CustomerGetType = getFeature(API_URL);
export const createCustomer: CustomerCreateType = createFeature(API_URL);
