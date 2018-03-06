const posts = [
  { id: 1, author: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, author: 2, title: 'GraphQL Rocks', votes: 3 },
  { id: 3, author: 2, title: 'Advanced GraphQL', votes: 1 },
]

//export default function() {
module.exports = {
  Query: {
    posts: () => {
      return posts
    },
    post: (_, { id }) => {
      const post = posts.find(d => (d.id = id))
      if (!post) throw new Error(`post ${id} not found`)
      return post
    },
  },
  Mutation: {
    upvotePost: (_, { id }) => {
      const post = posts.find(d => (d.id = id))
      if (!post) throw new Error(`post ${postId} not found`)
      post.votes += 1
      return post
    },
    addPost: (_, { title, author }) => {
      const maxId = Math.max(...posts.map(d => d.id))
      const post = {
        id: maxId + 1,
        author,
        title,
        votes: 0,
      }
      posts.push(post)
      return post
    },
  },
}
