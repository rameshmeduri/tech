# GEMINI
--------

Here is a structured list of GraphQL interview questions and answers, specifically tailored to a stack using **React.js** on the frontend and **Node.js** on the backend. The questions range from core concepts to advanced production challenges.

---

## 1. Core GraphQL & Architecture

### Q1: What is the primary difference between REST and GraphQL? How does GraphQL handle over-fetching and under-fetching?

* **REST:** Data structures are fixed by the server across multiple endpoints (e.g., `/api/users`, `/api/posts`). This often leads to **over-fetching** (getting more fields than needed) or **under-fetching** (making multiple network requests to fetch a user *and* their posts, known as the $N+1$ problem).
* **GraphQL:** Uses a **single endpoint** (usually `/graphql`) where the client sends a query specifying the exact data structure it needs. This completely eliminates over-fetching and under-fetching because the shape of the response matches the shape of the request exactly.

### Q2: What are the three core operations in GraphQL?

* **Query:** Used for fetching/reading data (similar to `GET` in REST).
* **Mutation:** Used for modifying, inserting, or deleting data (similar to `POST`, `PUT`, `DELETE` in REST).
* **Subscription:** Used to establish a long-lived connection (typically over WebSockets) for real-time data push from the server to the client.

### Q3: Explain the difference between Type and Input Type in a GraphQL Schema.

* **`type` (Object Type):** Represents the structure of the data the server can **return** to the client. It represents objects you can query fields from.
* **`input` (Input Type):** Represents the structured data you can **send** to the server as an argument (mostly used in mutations). Input types cannot contain complex relationships or fields that require resolvers; they are strictly for data payload structures.

---

## 2. Node.js Backend (Server-Side)

### Q4: What is a Resolver in Node.js GraphQL? What arguments does it receive?

A resolver is a function responsible for fetching the data for a single field in your schema. In a Node.js framework (like Apollo Server or `graphql-http`), every resolver receives four positional arguments:

```javascript
const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      return db.users.findById(args.id);
    }
  }
};

```

* **`parent` (or `root`):** The return value of the resolver for this field's parent field.
* **`args`:** An object containing all GraphQL arguments passed into the field by the client query.
* **`context`:** A shared object passed to all resolvers in a single request. Excellent for storing authentication data, database connections, or global loaders.
* **`info`:** Contains execution state information, field ASTs, and schema details (rarely modified directly but useful for advanced optimization).

### Q5: What is the $N+1$ problem in GraphQL, and how do you solve it in Node.js?

* **The Problem:** If a user queries a list of 100 `books` and wants the `author` for each book, a naive resolver setup will execute 1 database query for the books list, and then 100 separate database queries to fetch the author for each individual book ($1 + 100 = 101$ queries total).
* **The Solution:** Use Facebook’s **`DataLoader`** utility package. DataLoader batches and memoizes requests within a single RPC/Request lifecycle. It collects all individual `authorIds` requested during a single tick of the event loop, collapses duplicates, and executes a single batched database query (e.g., `SELECT * FROM authors WHERE id IN (...)`).

### Q6: How do you handle Authentication and Authorization in a Node.js GraphQL API?

* **Authentication (Who you are):** Handled via middleware *before* the request reaches the GraphQL layer. In Express/Apollo, you intercept the request headers (e.g., JWT), verify the token, and inject the `user` object into the **GraphQL context**.
* **Authorization (What you can see):** Validated directly inside the resolvers or via **custom schema directives**. You check the `context.user` permissions inside the resolver block before resolving data, throwing a forbidden error if unauthorized.

---

## 3. React.js Frontend (Client-Side)

### Q7: How do you integrate GraphQL with a React application? What is the standard tool?

The industry standard is **Apollo Client** (or alternatives like **Relay** and **URQL**). You wrap your root application component with an `ApolloProvider` and pass it an `ApolloClient` instance initialized with your server URI.

Inside components, you use React Hooks like `useQuery`, `useMutation`, and `useSubscription` to trigger operations.

### Q8: What is a Fragment in GraphQL, and how is it useful in React components?

A fragment is a reusable piece of a GraphQL query.

```graphql
fragment UserFields on User {
  id
  name
  avatarUrl
}

```

In React, fragments enable **colocation**. You can define a component (e.g., `<Avatar />`) and declare exactly what data it requires via a colocated GraphQL fragment. The parent component then combines these fragments into its main query. This prevents components from breaking if their child components' data dependencies change.

### Q9: How does Apollo Client handle caching, and what is the risk of mutating data?

Apollo Client uses an **In-Memory Cache** that normalizes incoming query results by looking for `__typename` and `id` (or `_id`) fields to create a unique cache key.

* **The Risk:** When performing a **mutation**, if you don't return the updated fields and the matching `id` in the mutation response payload, Apollo cannot auto-update the UI.
* **The Resolution:** For simple edits, always request the changed fields back in the mutation. For creations or deletions, use the `update` function option inside `useMutation` to manually modify the cache cache tree or use `refetchQueries`.

---

## 4. Advanced Production Scenarios

### Q10: How do you secure a GraphQL endpoint from Denial of Service (DoS) attacks?

Because REST APIs have fixed endpoints, limiting traffic is easy. In GraphQL, an attacker could send a deeply nested, recursive query that halts your Node.js event loop:

```graphql
query MaliciousQuery {
  user {
    posts {
      author {
        posts {
          author { ... } # Infinite loop
        }
      }
    }
  }
}

```

**Solutions:**

1. **Query Depth Limiting:** Use packages like `graphql-depth-limit` to reject queries nested deeper than a set number (e.g., max 5 levels).
2. **Query Cost/Complexity Analysis:** Assign arbitrary point costs to fields (e.g., a simple scalar = 1 point, a list fetching from DB = 10 points) and reject queries exceeding a total threshold.
3. **Persisted Queries:** In production, disable arbitrary dynamic client queries entirely. Generate a hash map of pre-approved query strings during build time, and have the React client only send the hash key over the wire.




# CHATGPT
----------
# GraphQL Interview Questions and Answers (React.js + Node.js)

## 1. What is GraphQL?

**Answer:**
GraphQL is a query language and runtime for APIs that allows clients to request exactly the data they need. It was developed by Meta.

**Benefits:**

* Fetch only required data
* Single endpoint
* Strongly typed schema
* Reduces over-fetching and under-fetching
* Self-documenting API

---

## 2. How is GraphQL different from REST?

| REST                              | GraphQL                               |
| --------------------------------- | ------------------------------------- |
| Multiple endpoints                | Single endpoint                       |
| Fixed response structure          | Client chooses fields                 |
| Over-fetching possible            | Exact data fetching                   |
| Versioning often needed           | Schema evolves naturally              |
| Multiple requests may be required | Single request can fetch related data |

**Example:**

REST:

```http
GET /users/1
GET /users/1/posts
```

GraphQL:

```graphql
query {
  user(id: 1) {
    name
    posts {
      title
    }
  }
}
```

---

## 3. What are the main components of GraphQL?

**Answer:**

1. Schema
2. Query
3. Mutation
4. Subscription
5. Resolver
6. Types

---

## 4. What is a GraphQL Schema?

**Answer:**
A schema defines:

* Available data
* Data types
* Operations clients can perform

Example:

```graphql
type User {
  id: ID!
  name: String!
  email: String!
}
```

---

## 5. What are GraphQL Types?

**Answer:**

### Scalar Types

```graphql
String
Int
Float
Boolean
ID
```

### Custom Types

```graphql
type Product {
  id: ID!
  name: String!
  price: Float!
}
```

---

## 6. What is a Query in GraphQL?

**Answer:**
Queries are used to fetch data.

```graphql
query {
  user(id: "1") {
    name
    email
  }
}
```

---

## 7. What is a Mutation?

**Answer:**
Mutations are used to create, update, or delete data.

```graphql
mutation {
  createUser(
    name: "John"
    email: "john@test.com"
  ) {
    id
    name
  }
}
```

---

## 8. What is a Subscription?

**Answer:**
Subscriptions provide real-time updates.

Example:

```graphql
subscription {
  userCreated {
    id
    name
  }
}
```

Common use cases:

* Chat applications
* Notifications
* Live dashboards

---

## 9. What is a Resolver?

**Answer:**
Resolvers contain the business logic that fetches data.

Node.js Example:

```javascript
const resolvers = {
  Query: {
    user: async (_, { id }) => {
      return await User.findById(id);
    }
  }
};
```

---

## 10. Explain the GraphQL Execution Flow.

**Answer:**

1. Client sends query
2. GraphQL parses query
3. Query validated against schema
4. Resolvers execute
5. Data fetched
6. Response returned

---

## 11. What are GraphQL Arguments?

**Answer:**

Arguments pass values to fields.

```graphql
query {
  user(id: "1") {
    name
  }
}
```

Schema:

```graphql
type Query {
  user(id: ID!): User
}
```

---

## 12. What are Variables in GraphQL?

**Answer:**

Instead of hardcoding values:

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    name
  }
}
```

Variables:

```json
{
  "id": "1"
}
```

---

## 13. What are Fragments?

**Answer:**

Fragments avoid duplication.

```graphql
fragment UserFields on User {
  id
  name
  email
}

query {
  user(id: "1") {
    ...UserFields
  }
}
```

---

## 14. What is Introspection?

**Answer:**
Introspection allows clients to discover schema information.

Used by:

* GraphQL Playground
* API documentation tools
* Code generation tools

---

## 15. What is Apollo Server?

**Answer:**
[Apollo Server](https://www.apollographql.com/docs/apollo-server/?utm_source=chatgpt.com) is a popular Node.js GraphQL server implementation.

Features:

* Schema management
* Resolvers
* Authentication support
* Caching
* Federation

---

## 16. What is Apollo Client?

**Answer:**
[Apollo Client](https://www.apollographql.com/docs/react/?utm_source=chatgpt.com) is a GraphQL client commonly used with React.

Features:

* Data fetching
* Caching
* State management
* Error handling

---

## 17. How do you call GraphQL APIs in React?

**Answer:**

```javascript
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

function Users() {
  const { loading, error, data } =
    useQuery(GET_USERS);

  if (loading) return "Loading...";

  return (
    <div>
      {data.users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

## 18. What is Over-fetching?

**Answer:**

Receiving unnecessary data.

REST:

```json
{
  "id": 1,
  "name": "John",
  "email": "...",
  "address": "...",
  "phone": "..."
}
```

Need only:

```json
{
  "name": "John"
}
```

GraphQL solves this.

---

## 19. What is Under-fetching?

**Answer:**

When one API doesn't provide enough data, forcing additional API calls.

GraphQL allows fetching related data in one request.

---

## 20. What is N+1 Query Problem?

**Answer:**

Example:

```graphql
{
  users {
    posts {
      title
    }
  }
}
```

For 100 users:

* 1 query for users
* 100 queries for posts

Total = 101 queries

This is called the N+1 problem.

---

## 21. How do you solve N+1 Query Problem?

**Answer:**

Using [DataLoader](https://github.com/graphql/dataloader?utm_source=chatgpt.com).

```javascript
const userLoader = new DataLoader(
  async ids => {
    return User.find({
      _id: { $in: ids }
    });
  }
);
```

Benefits:

* Batching
* Caching
* Reduced DB calls

---

## 22. How is Authentication implemented in GraphQL?

**Answer:**

Typically using JWT.

```javascript
const server = new ApolloServer({
  context: ({ req }) => {
    const token =
      req.headers.authorization;

    return verifyToken(token);
  }
});
```

---

## 23. How is Authorization implemented?

**Answer:**

Role-based access.

```javascript
Query: {
  users: (_, args, context) => {
    if (context.role !== "admin") {
      throw new Error("Unauthorized");
    }

    return User.find();
  }
}
```

---

## 24. What are GraphQL Directives?

**Answer:**

Directives modify query behavior.

```graphql
query($showEmail: Boolean!) {
  user {
    name
    email @include(if: $showEmail)
  }
}
```

Common directives:

* @include
* @skip
* @deprecated

---

## 25. What is GraphQL Federation?

**Answer:**

Federation allows multiple GraphQL services to appear as one API.

Example:

* User Service
* Product Service
* Order Service

All combined into one GraphQL Gateway.

---

## 26. What are GraphQL Subscriptions implemented with?

**Answer:**

Usually:

* WebSockets
* Server-Sent Events (SSE)

Libraries:

* graphql-ws
* Apollo subscriptions

---

## 27. How do you handle Errors in GraphQL?

**Answer:**

```javascript
throw new Error("User not found");
```

Response:

```json
{
  "errors": [
    {
      "message": "User not found"
    }
  ]
}
```

---

## 28. What is GraphQL Caching?

**Answer:**

Caching can occur at:

1. Browser
2. Apollo Client
3. CDN
4. Server
5. Database

Apollo Client provides normalized caching.

---

## 29. What are the advantages of GraphQL?

**Answer:**

* Single endpoint
* Strong typing
* Better developer experience
* Efficient data retrieval
* Real-time support
* Self-documenting

---

## 30. What are the disadvantages of GraphQL?

**Answer:**

* Increased server complexity
* Query performance issues
* Learning curve
* Difficult HTTP caching
* Requires query cost management

---

# Advanced Questions

## 31. How would you design GraphQL for a React + Node.js e-commerce application?

**Answer:**

Schema:

```graphql
type Product {
  id: ID!
  name: String!
  price: Float!
}

type Order {
  id: ID!
  products: [Product]
}

type Query {
  products: [Product]
  order(id: ID!): Order
}

type Mutation {
  createOrder(productIds: [ID!]!): Order
}
```

Frontend:

* Apollo Client
* React Hooks

Backend:

* Apollo Server
* Node.js
* Database layer
* DataLoader
* JWT Authentication

---

## 32. What GraphQL performance optimizations have you used?

**Answer:**

* DataLoader batching
* Query depth limiting
* Query complexity analysis
* Pagination
* Field-level caching
* Redis caching
* Database indexing
* Persisted queries

---

## 33. Explain Cursor-based Pagination.

**Answer:**

Preferred over offset pagination.

```graphql
query {
  users(first: 10, after: "cursor123") {
    edges {
      node {
        id
        name
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
```

Benefits:

* Better performance
* Handles large datasets
* Avoids duplicate records

---

## 34. What security concerns exist in GraphQL?

**Answer:**

* Deep nested queries
* Query abuse
* DoS attacks
* Introspection exposure
* Authorization flaws

Mitigation:

* Rate limiting
* Query complexity limits
* Authentication
* Authorization
* Depth limiting

---

## 35. What is your GraphQL architecture for React + Node.js production applications?

**Answer:**

**Frontend**

* React
* Apollo Client
* Code Generation
* Error Boundaries

**API Layer**

* Apollo Server
* JWT Authentication
* Rate Limiting

**Business Layer**

* Services
* Validation
* Authorization

**Data Layer**

* PostgreSQL/MongoDB
* DataLoader
* Redis Cache

**Monitoring**

* Logging
* Tracing
* Performance Metrics

This answer demonstrates practical experience beyond basic GraphQL concepts and is commonly asked in senior React/Node.js interviews.



# CLAUDE
--------

# GraphQL Interview Questions & Answers
> Stack: React.js · Node.js

---

## Core GraphQL

### 1. What is GraphQL and how is it different from REST?
**Level:** Basic

GraphQL is a query language for APIs and a runtime for executing those queries. Unlike REST which exposes multiple fixed endpoints (one per resource), GraphQL exposes a single endpoint and lets clients specify exactly what data they need — no over-fetching or under-fetching.

```graphql
# REST: multiple round trips
GET /users/1
GET /users/1/posts
GET /users/1/followers

# GraphQL: one request
query {
  user(id: "1") {
    name
    posts { title }
    followers { name }
  }
}
```

---

### 2. What are the three operation types in GraphQL?
**Level:** Basic

GraphQL has three operation types: **Query** (read data), **Mutation** (write/modify data), and **Subscription** (real-time data via WebSockets). Each maps to a root type in your schema.

```graphql
# Query
query GetUser { user(id: "1") { name } }

# Mutation
mutation CreatePost { createPost(title: "Hi") { id } }

# Subscription
subscription OnNewMessage {
  messageSent { content author }
}
```

---

### 3. What is a GraphQL Schema and SDL?
**Level:** Basic

The Schema Definition Language (SDL) is used to define the shape of your API — types, queries, mutations, and subscriptions. It acts as a contract between the client and server.

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Query {
  user(id: ID!): User
  users: [User!]!
}

type Mutation {
  createUser(name: String!, email: String!): User
}
```

---

### 4. What is schema stitching vs federation in GraphQL?
**Level:** Advanced

Schema stitching merges multiple GraphQL schemas into one at the gateway level. Apollo Federation is the modern approach — each service defines its own subgraph schema with `@key` directives and the gateway composes them automatically. Federation is preferred for microservices.

```graphql
# Subgraph: Users service
type User @key(fields: "id") {
  id: ID!
  name: String!
}

# Subgraph: Orders service
type Order {
  id: ID!
  user: User! @requires(fields: "id")
  total: Float!
}

extend type User @key(fields: "id") {
  id: ID! @external
  orders: [Order!]!
}
```

---

### 5. What is persisted queries and how do they improve performance?
**Level:** Advanced

Persisted queries send only a hash ID to the server instead of the full query string, reducing request payload size. The server maps the hash to the stored query. Apollo supports Automatic Persisted Queries (APQ) out of the box.

```js
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { sha256 } from 'crypto-hash';

const link = createPersistedQueryLink({ sha256 }).concat(httpLink);

// First request: sends hash, server misses → client resends full query
// Subsequent requests: server recognizes hash → serves instantly
// Network payload: { "extensions": { "persistedQuery": { "sha256Hash": "abc..." } } }
```

---

## Node.js

### 6. What are resolvers in GraphQL?
**Level:** Basic

Resolvers are functions that return data for each field in the schema. Every field can have its own resolver. In Node.js, resolvers sit between the schema and your data sources (DB, REST APIs, etc.).

```js
const resolvers = {
  Query: {
    user: async (_, { id }, context) => {
      return await context.db.User.findById(id);
    }
  },
  User: {
    posts: async (parent, _, context) => {
      return await context.db.Post.find({ userId: parent.id });
    }
  }
};
```

---

### 7. How do you set up a GraphQL server in Node.js with Apollo Server?
**Level:** Basic

Apollo Server is the most popular GraphQL server for Node.js. You define `typeDefs` (schema) and `resolvers`, then pass them to `ApolloServer`. It integrates with Express, Fastify, and other frameworks.

```js
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Query { hello: String }
`;

const resolvers = {
  Query: { hello: () => 'Hello, GraphQL!' }
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});
console.log(`Server ready at: ${url}`);
```

---

### 8. What is the N+1 problem in GraphQL and how do you solve it?
**Level:** Intermediate

The N+1 problem occurs when fetching a list of items and then making a separate DB query per item to resolve nested fields. For N users, you'd make N+1 queries. The solution is **DataLoader**, which batches and caches multiple DB calls into one.

```js
import DataLoader from 'dataloader';

// Without DataLoader: N+1 queries
// User.posts: (user) => db.posts.find({ userId: user.id }) — called N times

// With DataLoader: 1 batched query
const postsByUserLoader = new DataLoader(async (userIds) => {
  const posts = await db.posts.find({ userId: { $in: userIds } });
  return userIds.map(id => posts.filter(p => p.userId === id));
});

// In resolver
User: {
  posts: (parent, _, { loaders }) =>
    loaders.postsByUser.load(parent.id)
}
```

---

### 9. How do you handle authentication/authorization in a GraphQL API?
**Level:** Intermediate

Authentication is typically handled in the `context` function — you decode the JWT from the Authorization header and attach the user to the context object. Resolvers then check `context.user` to authorize access.

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization?.split(' ')[1];
    let user = null;
    if (token) {
      user = jwt.verify(token, process.env.JWT_SECRET);
    }
    return { user, db };
  }
});

// In resolver
Query: {
  myProfile: (_, __, { user }) => {
    if (!user) throw new GraphQLError('Not authenticated', {
      extensions: { code: 'UNAUTHENTICATED' }
    });
    return db.User.findById(user.id);
  }
}
```

---

### 10. What are GraphQL Subscriptions and how do you implement them?
**Level:** Intermediate

Subscriptions allow clients to receive real-time updates when data changes. They use WebSockets under the hood. In Node.js you typically use `graphql-ws` along with `PubSub` to publish and subscribe to events.

```js
import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();

const typeDefs = `#graphql
  type Subscription {
    messageSent: Message!
  }
`;

const resolvers = {
  Mutation: {
    sendMessage: async (_, args) => {
      const msg = await db.Message.create(args);
      pubsub.publish('MESSAGE_SENT', { messageSent: msg });
      return msg;
    }
  },
  Subscription: {
    messageSent: {
      subscribe: () => pubsub.asyncIterator(['MESSAGE_SENT'])
    }
  }
};
```

---

### 11. How do you prevent over-fetching attacks and limit query complexity?
**Level:** Advanced

Malicious clients can send deeply nested queries that exhaust server resources. Use `graphql-depth-limit` to restrict query depth and `graphql-validation-complexity` to calculate and reject overly expensive queries.

```js
import depthLimit from 'graphql-depth-limit';
import { createComplexityLimitRule } from 'graphql-validation-complexity';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [
    depthLimit(5),
    createComplexityLimitRule(1000, {
      onCost: (cost) => console.log('Query cost:', cost)
    })
  ]
});
```

---

## React.js

### 12. How do you query a GraphQL API in React using Apollo Client?
**Level:** Basic

Apollo Client is the standard library for GraphQL in React. Wrap your app in `ApolloProvider`, then use the `useQuery` hook to fetch data declaratively inside components.

```jsx
// Setup: index.jsx
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

// Component
import { useQuery, gql } from '@apollo/client';
const GET_USERS = gql`
  query GetUsers {
    users { id name email }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return data.users.map(u => <div key={u.id}>{u.name}</div>);
}
```

---

### 13. What are GraphQL Fragments and when should you use them?
**Level:** Intermediate

Fragments are reusable pieces of a query. They prevent duplication when the same fields are needed in multiple queries. In React, co-locating fragments with components (fragment colocation) is a best practice.

```js
// Define a fragment
const USER_FIELDS = gql`
  fragment UserFields on User {
    id name email avatar
  }
`;

// Reuse it in queries
const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) { ...UserFields }
  }
  ${USER_FIELDS}
`;

const GET_ALL_USERS = gql`
  query GetAllUsers {
    users { ...UserFields }
  }
  ${USER_FIELDS}
`;
```

---

### 14. What is the difference between useQuery and useLazyQuery in Apollo Client?
**Level:** Intermediate

`useQuery` runs the query automatically when the component mounts. `useLazyQuery` returns an execute function — the query only runs when you call that function manually. Use `useLazyQuery` for on-demand fetching like search or button-triggered requests.

```jsx
// useQuery — runs on mount
const { data } = useQuery(GET_USERS);

// useLazyQuery — runs on demand
const [searchUsers, { loading, data }] = useLazyQuery(SEARCH_USERS);

function handleSearch(term) {
  searchUsers({ variables: { term } });
}

return (
  <button onClick={() => handleSearch('John')}>Search</button>
);
```

---

### 15. What is Apollo Client cache and how does optimistic UI work?
**Level:** Intermediate

Apollo Client stores query results in a normalized in-memory cache keyed by type and ID. Optimistic UI lets you update the cache immediately before the server responds, giving users instant feedback — the cache is rolled back if the mutation fails.

```js
const [createPost] = useMutation(CREATE_POST, {
  optimisticResponse: {
    createPost: {
      __typename: 'Post',
      id: 'temp-id',
      title: newTitle,
      published: false
    }
  },
  update(cache, { data: { createPost } }) {
    cache.modify({
      fields: {
        posts(existing = []) {
          const ref = cache.writeFragment({
            data: createPost,
            fragment: POST_FIELDS
          });
          return [...existing, ref];
        }
      }
    });
  }
});
```

---

*15 questions · Stack: React.js + Node.js · Levels: Basic · Intermediate · Advanced*


