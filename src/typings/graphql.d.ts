declare module '*.gql';
declare module '*.graphql';

declare module '*.gql' {
  const Query: import('graphql').DocumentNode;
  export default Query;
  export const _queries: Record<string, import('graphql').DocumentNode>;
  export const _fragments: Record<
    string,
    import('graphql').FragmentDefinitionNode
  >;

  export interface Loc {
    source: {
      body: string;
    };
  }

  export const loc: Loc;
}
