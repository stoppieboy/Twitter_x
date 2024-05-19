# Express Server

## Database

currently using cloud hosted database server -- MongoDB Atlas.

## API Design

### postTweet(userID: UUID, content: string, mediaURL?: string): boolean

### follow(followerID: UUID, followeeID: UUID): boolean

### unfollow(followerID: UUID, followeeID: UUID): boolean

### getFeed(userID: UUID): Tweet[]

## Possible Improvements

- Implement Microservice architecture.
- research better alternatives of HTTP for inter-service communication such as gRPC.
- implement separate 

## References
- [JWT based server-side authentication and authorization](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)
- [joining two collections in MongoDB](https://hevodata.com/learn/mongodb-join-two-collections/)
- [aggregation pipeline in MongoDB](https://www.mongodb.com/docs/manual/reference/operator/aggregation/match/)
- [filtering mongoDB documents based on text](https://sparkbyexamples.com/mongodb/mongodb-check-if-a-field-contains-a-string/)
- [Debouncing and throttling](https://dev.to/abhishekrawe/debouncing-and-throttling-in-reactjs-4fhf)