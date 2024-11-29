import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '', // graphql backend interface address
  documents: ['./src/**/*.gql'],
  generates: {
    './src/typings/query.d.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-operations',
        // 'typescript-react-apollo', // not available
      ],
    },
  },
};

export default config;
