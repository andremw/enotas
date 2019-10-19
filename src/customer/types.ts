import { GotPromise } from 'got';
import { ApiInstance, FilterParams } from '../_generic/types';

export type Customer = {
  readonly id?: string;
  readonly createdAt?: Date;
  readonly cpfCnpj: string;
  readonly nome: string;
  readonly nomeFantasia?: string;
  readonly inscricaoMunicipal?: string;
  readonly inscricaoEstadual?: string;
  readonly email: string;
  readonly telefone?: string;
  readonly valorMovimentado?: string;
  readonly endereco?: {
    readonly pais?: string;
    readonly uf?: string;
    readonly codigoIbgeUf?: string;
    readonly cidade?: string;
    readonly codigoIbgeCidade?: string;
    readonly logradouro?: string;
    readonly numero?: string;
    readonly complemento?: string;
    readonly bairro?: string;
    readonly cep?: string;
  };
};

export type CustomerListType = (api: ApiInstance) => (query: FilterParams) => GotPromise<Customer[]>;
export type CustomerGetType = (api: ApiInstance) => (id: string) => GotPromise<Customer>;
export type CustomerCreateType = (api: ApiInstance) => (body: Customer) => GotPromise<Customer>;
