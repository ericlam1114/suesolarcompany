import { BlogPostsGrid } from '@/components';
import { NextPage } from 'next';

const BlogPage: NextPage = () => {
  return (
    <>
      <div
        className="w-layout-blockcontainer w-container"
        style={{ paddingLeft: '1rem' }}
      >
        <h1>Blog Posts</h1>
      </div>
      <div className="w-dyn-list">
        <BlogPostsGrid />
      </div>
    </>
  );
};

export default BlogPage;