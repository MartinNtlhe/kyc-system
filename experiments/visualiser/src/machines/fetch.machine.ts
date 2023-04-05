import { assign } from 'xstate';

export const fetchMachine = {
  id: 'fetch',
  initial: 'idle',
  context: {
    retries: 0,
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      on: {
        RESOLVE: 'success',
        REJECT: 'failure',
      },
    },
    success: {
      type: 'final',
    },
    failure: {
      on: {
        RETRY: {
          target: 'loading',
          actions: assign({
            retries: (context: any, event: any) => (context as any).retries + 1,
          }),
        },
      },
    },
  },
};
