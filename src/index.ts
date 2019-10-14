import got from 'got';

import { reject, isNil, join } from 'ramda';

import { Sale } from './types';

const withoutUndefined = reject(isNil);
const apiUrl = 'https://app.enotas.com.br/api';
const joinWithSemicolon = join(';');

function mapSale(sale: Sale): object {
    return {
        ...sale,
        produto: {
            ...sale.produto,
            tags: joinWithSemicolon(sale.produto.tags),
        },
        tags: joinWithSemicolon(sale.tags || []),
    };
}

interface SalesParams {
    readonly filter: string;
    readonly pageNumber: number;
    readonly pageSize: number;
    readonly orderBy: number;
}

const enotas = ({ apiKey }: { readonly apiKey: string } = { apiKey: '' }): any => {
    if (!apiKey) {
        throw new Error('missing parameter "apiKey"');
    }

    const gotClient = got.extend({
        baseUrl: apiUrl,
        headers: {
            Authorization: `Basic ${apiKey}`,
        },
        json: true,
    });

    return {
        getSales: ({ filter, pageNumber, pageSize, orderBy }: SalesParams): Promise<any> => {
            const query = withoutUndefined({
                filter,
                pageNumber,
                pageSize,
                orderBy,
            });

            return gotClient.get('/vendas/getFilterBy', {
                query,
            });
        },
        createSale: (sale: Sale): any => {
            return gotClient.post('/vendas', {
                body: mapSale(sale),
            });
        },
    };
};

export default enotas;
