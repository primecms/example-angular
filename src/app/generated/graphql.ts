/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

export interface Query {
  Blog?: Blog | null;
  allBlog?: BlogConnection | null;
  Prime_Document?: PrimeDocument | null;
}

export interface Blog {
  id?: string | null;
  body?: string | null;
  slug?: string | null;
  title?: string | null;
  _meta?: PrimeDocumentMeta | null;
}

export interface PrimeDocumentMeta {
  locale?: string | null;
  locales?: (string | null)[] | null;
  publishedAt?: DateTime | null;
  updatedAt?: DateTime | null;
  id?: string | null;
}

export interface BlogConnection {
  edges?: (BlogConnectionEdge | null)[] | null;
  pageInfo?: PageInfo | null;
  totalCount?: number | null;
}

export interface BlogConnectionEdge {
  node?: Blog | null;
  cursor?: string | null;
}

export interface PageInfo {
  hasNextPage?: boolean | null;
  hasPreviousPage?: boolean | null;
  startCursor?: string | null;
  endCursor?: string | null;
}

export interface PrimeDocumentNotFound {
  message?: string | null;
}

export interface Mutation {
  createBlog?: Blog | null;
  updateBlog?: Blog | null;
  removeBlog?: boolean | null;
}

export interface BlogSort {
  body?: Order | null;
  slug?: Order | null;
  title?: Order | null;
}

export interface BlogWhere {
  body?: PrimeFieldStringWhere | null;
  slug?: PrimeFieldStringWhere | null;
  title?: PrimeFieldStringWhere | null;
  OR?: (BlogWhere | null)[] | null;
  AND?: (BlogWhere | null)[] | null;
}

export interface PrimeFieldStringWhere {
  neq?: string | null;
  eq?: string | null;
  contains?: string | null;
}

export interface BlogCreateInput {
  body?: string | null;
  slug?: string | null;
  title?: string | null;
}

export interface BlogUpdateInput {
  body?: string | null;
  slug?: string | null;
  title?: string | null;
}
export interface BlogQueryArgs {
  id: string;
  locale?: string | null;
}
export interface AllBlogQueryArgs {
  locale?: string | null;
  first?: number | null;
  skip?: number | null;
  before?: string | null;
  after?: string | null;
  sort?: (BlogSort | null)[] | null;
  where?: (BlogWhere | null)[] | null;
}
export interface PrimeDocumentQueryArgs {
  id?: string | null;
  locale?: string | null;
}
export interface CreateBlogMutationArgs {
  locale?: string | null;
  input: BlogCreateInput;
}
export interface UpdateBlogMutationArgs {
  id: string /** Can be hashid or UUID */;
  merge?: boolean | null /** Merge updated input (instead of replacing) */;
  locale?: string | null;
  input: BlogUpdateInput;
}
export interface RemoveBlogMutationArgs {
  id: string /** Accepts hashid or UUID */;
  locale?: string | null /** Optional when using UUID as id */;
}

export enum Order {
  ASC = "ASC",
  DESC = "DESC"
}

export type PrimeDocument = Blog | PrimeDocumentNotFound;

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    Blog?: BlogResolver<Blog | null, any, Context>;
    allBlog?: AllBlogResolver<BlogConnection | null, any, Context>;
    Prime_Document?: PrimeDocumentResolver<PrimeDocument | null, any, Context>;
  }

  export type BlogResolver<
    R = Blog | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BlogArgs>;
  export interface BlogArgs {
    id: string;
    locale?: string | null;
  }

  export type AllBlogResolver<
    R = BlogConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllBlogArgs>;
  export interface AllBlogArgs {
    locale?: string | null;
    first?: number | null;
    skip?: number | null;
    before?: string | null;
    after?: string | null;
    sort?: (BlogSort | null)[] | null;
    where?: (BlogWhere | null)[] | null;
  }

  export type PrimeDocumentResolver<
    R = PrimeDocument | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PrimeDocumentArgs>;
  export interface PrimeDocumentArgs {
    id?: string | null;
    locale?: string | null;
  }
}

export namespace BlogResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>;
    body?: BodyResolver<string | null, any, Context>;
    slug?: SlugResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    _meta?: MetaResolver<PrimeDocumentMeta | null, any, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MetaResolver<
    R = PrimeDocumentMeta | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PrimeDocumentMetaResolvers {
  export interface Resolvers<Context = any> {
    locale?: LocaleResolver<string | null, any, Context>;
    locales?: LocalesResolver<(string | null)[] | null, any, Context>;
    publishedAt?: PublishedAtResolver<DateTime | null, any, Context>;
    updatedAt?: UpdatedAtResolver<DateTime | null, any, Context>;
    id?: IdResolver<string | null, any, Context>;
  }

  export type LocaleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LocalesResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PublishedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = DateTime | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace BlogConnectionResolvers {
  export interface Resolvers<Context = any> {
    edges?: EdgesResolver<(BlogConnectionEdge | null)[] | null, any, Context>;
    pageInfo?: PageInfoResolver<PageInfo | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
  }

  export type EdgesResolver<
    R = (BlogConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace BlogConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<Blog | null, any, Context>;
    cursor?: CursorResolver<string | null, any, Context>;
  }

  export type NodeResolver<
    R = Blog | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CursorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PageInfoResolvers {
  export interface Resolvers<Context = any> {
    hasNextPage?: HasNextPageResolver<boolean | null, any, Context>;
    hasPreviousPage?: HasPreviousPageResolver<boolean | null, any, Context>;
    startCursor?: StartCursorResolver<string | null, any, Context>;
    endCursor?: EndCursorResolver<string | null, any, Context>;
  }

  export type HasNextPageResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasPreviousPageResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StartCursorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EndCursorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PrimeDocumentNotFoundResolvers {
  export interface Resolvers<Context = any> {
    message?: MessageResolver<string | null, any, Context>;
  }

  export type MessageResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    createBlog?: CreateBlogResolver<Blog | null, any, Context>;
    updateBlog?: UpdateBlogResolver<Blog | null, any, Context>;
    removeBlog?: RemoveBlogResolver<boolean | null, any, Context>;
  }

  export type CreateBlogResolver<
    R = Blog | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateBlogArgs>;
  export interface CreateBlogArgs {
    locale?: string | null;
    input: BlogCreateInput;
  }

  export type UpdateBlogResolver<
    R = Blog | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpdateBlogArgs>;
  export interface UpdateBlogArgs {
    id: string /** Can be hashid or UUID */;
    merge?: boolean | null /** Merge updated input (instead of replacing) */;
    locale?: string | null;
    input: BlogUpdateInput;
  }

  export type RemoveBlogResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveBlogArgs>;
  export interface RemoveBlogArgs {
    id: string /** Accepts hashid or UUID */;
    locale?: string | null /** Optional when using UUID as id */;
  }
}

export namespace AllBlog {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";
    allBlog?: AllBlog | null;
  };

  export type AllBlog = {
    __typename?: "Blog_Connection";
    edges?: (Edges | null)[] | null;
  };

  export type Edges = {
    __typename?: "Blog_ConnectionEdge";
    node?: Node | null;
  };

  export type Node = {
    __typename?: "Blog";
    _meta?: Meta | null;
    id?: string | null;
    title?: string | null;
    body?: string | null;
  };

  export type Meta = {
    __typename?: "PrimeDocument_Meta";
    updatedAt?: DateTime | null;
  };
}

export namespace Blog {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";
    Blog?: Blog | null;
  };

  export type Blog = {
    __typename?: "Blog";
    _meta?: Meta | null;
    id?: string | null;
    title?: string | null;
    body?: string | null;
  };

  export type Meta = {
    __typename?: "PrimeDocument_Meta";
    updatedAt?: DateTime | null;
  };
}

import { Injectable } from "@angular/core";

import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class AllBlogGQL extends Apollo.Query<AllBlog.Query, AllBlog.Variables> {
  document: any = gql`
    query allBlog {
      allBlog {
        edges {
          node {
            _meta {
              updatedAt
            }
            id
            title
            body
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class BlogGQL extends Apollo.Query<Blog.Query, Blog.Variables> {
  document: any = gql`
    query Blog($id: ID!) {
      Blog(id: $id) {
        _meta {
          updatedAt
        }
        id
        title
        body
      }
    }
  `;
}
