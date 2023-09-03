/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      datePosted
      remoteJobsOnly
      employmentType
      experience
      country
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        datePosted
        remoteJobsOnly
        employmentType
        experience
        country
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
