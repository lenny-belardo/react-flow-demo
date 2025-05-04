import { graphql } from 'msw';

export const handlers = [
    graphql.query('ApplicationGraph', ({ query }) => {
        console.log('Intercepted a "ApplicationGraph" GraphQL query:', query);
    })
];
