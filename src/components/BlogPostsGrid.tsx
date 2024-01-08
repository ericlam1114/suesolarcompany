

import React from 'react';
import { Post } from '@/types';
import { BlogPostCard } from './BlogPostCard';
import styles from './BlogPostsGrid.module.css';

interface BlogPostsGridProps {
  posts: Post[];
}

export const BlogPostsGrid: React.FC<BlogPostsGridProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div className={styles.emptyContainer}>No posts have been found</div>;
  }
  
  return (
    <div role="list" className={`w-container ${styles.container}`}>
      {posts.map((post) => (
        <BlogPostCard key={post._id} post={post} />
        ))}
    </div>
  );
};
