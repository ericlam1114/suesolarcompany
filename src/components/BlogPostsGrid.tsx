import { Post } from '@/types';
import { client } from '@/utils';
import React from 'react';
import { BlogPostCard } from './BlogPostCard';
import styles from './BlogPostsGrid.module.css';

const posts = [
  {
    id: '1',
    content:
      "Learn how NEMA's plummeting value and rise in tax appeals are impacting San Francisco's commercial real estate and economic stability.",
    title: "San Francisco Apartment Tower's Valuation Fell 50%",
    slug: 'blog-post',
    thumbnailUrl:
      'https://uploads-ssl.webflow.com/64b1e3cca440469bf8786b52/6532e18281db66ea73207e1b_sfbuilding.png',
  },
  {
    id: '2',
    content:
      'Unlock savings now! Discover the top reasons why challenging your commercial property tax assessment is a must.',
    title: 'Why You Should Appeal Your Commercial Property Tax Assessment',
    slug: 'blog-post',
    thumbnailUrl:
      'https://uploads-ssl.webflow.com/64b1e3cca440469bf8786b52/65315f7ea7aaccf7db60930d_ericlamcrypto_court_gavel_courtroom_b9b8c1b4-2d1c-44d7-a3ab-0e4d68b6a428.png',
  },
];

export const BlogPostsGrid: React.FC = async () => {
  const posts = await client.fetch<Post[]>(
    // when ready swap below for this  `*[_type == "post"]|order(publishedAt desc)`
    `*[_type == "post/"]|order(publishedAt desc)`
  );

  if (posts.length === 0) {
    return <div className={styles.emptyContainer}>No posts found</div>;
  }

  return (
    <div role="list" className={`w-container ${styles.container}`}>
      {posts.map((post) => (
        <BlogPostCard key={post._id} post={post} />
      ))}
    </div>
  );
};
