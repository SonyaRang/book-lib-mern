import { gql } from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($body: saveBookInput!) {
    saveBook(body: $bookData) {
        _id
        username
        email
        bookCount
        savedBooks {
            # _id
            authors
            description
            image
            link
            title
            bookId
            }
        }
    }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
addUser(username: $username, password: $password, email: $email) {
    
        user {
        _id
        username
        email
        bookCount
        savedBooks {
            authors
            bookId
            image
            link
            title
            description
            }
            }
        token
    }
}
`;


export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            # _id
            authors
            description
            image
            link
            title
            bookId
            }
        }
    }
`;