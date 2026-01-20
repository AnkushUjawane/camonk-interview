import {QueryClient} from '@tanstack/react-query';

export const clientQuery = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            retry: 1
        }
    }
})