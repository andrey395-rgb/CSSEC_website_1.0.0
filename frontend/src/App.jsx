// Inside: src/App.jsx

import { useQuery, gql } from '@apollo/client';
import './App.css';

// 1. Define your GraphQL query
const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        date
        slug
      }
    }
  }
`;

function App() {
  // 2. Run the query
  const { loading, error, data } = useQuery(GET_POSTS);

  // 3. Handle loading and error states
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  // 4. Display the data
  return (
    <div className="App">
      <h1>Vite + React + Headless WordPress</h1>
      <h2>Posts from WPGraphQL:</h2>
      {data.posts.nodes.map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>
            Slug: {post.slug} | Published on: {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;