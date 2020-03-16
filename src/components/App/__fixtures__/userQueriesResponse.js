import { USER_QUERY } from '../../../queries';
import { NETWORK_ERROR_MESSAGE } from '../../../constants';

export const mockWithResults = [
  {
    request: {
      query: USER_QUERY,
      variables: {
        searchTerm: 'miah',
      },
    },
    result: {
      data: {
        search: {
          edges: [
            {
              node: {
                avatarUrl: 'https://avatars1.githubusercontent.com/u/49856?v=4',
                login: 'miah',
                commitComments: {
                  nodes: [
                    {
                      commit: {
                        authoredByCommitter: true,
                        authoredDate: '2013-11-30T07:58:16Z',
                        message:
                          'Revert "doc: Removed use of gendered pronouns"\n\n@isaacs may have his commit bit but that does not mean he is at liberty\nto land patches at will.  All patches have to be signed off by either\nme or Bert.  Isaac, consider yourself chided.\n\nThis reverts commit 47d98b64c45db8335bf7e065351e385cae32323d.',
                      },
                    },
                    {
                      commit: {
                        authoredByCommitter: true,
                        authoredDate: '2013-11-30T07:58:16Z',
                        message:
                          'Revert "doc: Removed use of gendered pronouns"\n\n@isaacs may have his commit bit but that does not mean he is at liberty\nto land patches at will.  All patches have to be signed off by either\nme or Bert.  Isaac, consider yourself chided.\n\nThis reverts commit 47d98b64c45db8335bf7e065351e385cae32323d.',
                      },
                    },
                    {
                      commit: {
                        authoredByCommitter: true,
                        authoredDate: '2013-11-30T07:58:16Z',
                        message:
                          'Revert "doc: Removed use of gendered pronouns"\n\n@isaacs may have his commit bit but that does not mean he is at liberty\nto land patches at will.  All patches have to be signed off by either\nme or Bert.  Isaac, consider yourself chided.\n\nThis reverts commit 47d98b64c45db8335bf7e065351e385cae32323d.',
                      },
                    },
                  ],
                },
              },
            },
            {
              node: {
                avatarUrl:
                  'https://avatars1.githubusercontent.com/u/36778150?v=4',
                login: 'miahuynh',
                commitComments: {
                  nodes: [],
                },
              },
            },
            {
              node: {
                avatarUrl:
                  'https://avatars0.githubusercontent.com/u/29414935?v=4',
                login: 'miahawkins',
                commitComments: {
                  nodes: [],
                },
              },
            },
          ],
        },
      },
    },
  },
];

// {
//   "data": {
//     "search": {
//       "edges": []
//     }
//   }
// }

export const mockWithNoResults = [
  {
    request: {
      query: USER_QUERY,
      variables: {
        searchTerm: 'hlkadfhlajdsf',
      },
    },
    result: {
      data: {
        search: {
          edges: [],
        },
      },
    },
  },
];

export const mockWithError = [
  {
    request: {
      query: USER_QUERY,
      variables: {
        searchTerm: 'hlkadfhlajdsf',
      },
    },
    error: new Error(NETWORK_ERROR_MESSAGE),
  },
];
