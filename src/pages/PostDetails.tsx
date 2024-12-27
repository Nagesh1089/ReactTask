import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById } from '../api/posts';

interface Post {
  title: string;
  body: string;
}

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetchPostById(Number(id));
        setPost(response.data);
      } catch {
        setError('Failed to fetch post details');
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <div className="container">
      <Link to="/" className="btn btn-secondary mb-4">Back to Posts</Link>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostDetails;
