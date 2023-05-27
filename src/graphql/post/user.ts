import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GetPost {
    getPosts {
      id
      createdAt
      updatedAt
      title
      content
      isPublished
    }
  }
`;
