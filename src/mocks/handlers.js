import { graphql, HttpResponse } from 'msw';

const applicationGraph = new Map([
    [
        'e82f332c-a4e7-4463-b440-59bc91792634',
        {
          id: 'e82f332c-a4e7-4463-b440-59bc91792634',
          title: 'Introducing a new JavaScript runtime'
        }
    ]
]);

export const handlers = [
    graphql.query('ApplicationGraph', () => {
        return HttpResponse.json({
            data: {
                applicationGraph: Array.from(applicationGraph.values())
            }
        });
    })
];
