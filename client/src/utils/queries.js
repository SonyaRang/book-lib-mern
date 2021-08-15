import { gql } from 'graphql-tag';

export const GET_ME = gql`
{
    me {
    username
    _id
    email
    savedBooks {
        bookId
        authors
        description
        title
        image
        link
        }
    }
}`
;