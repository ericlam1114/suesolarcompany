import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './BlogPostCard.module.css';

type Props = {
  post: Post;
};

export const BlogPostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      role="listitem"
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <Image src={post.thumbnailUrl} alt="" fill />
      </div>

      <div className={styles.contentContainer}>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.content}>{post.content}</p>
      </div>
    </Link>
  );
};
