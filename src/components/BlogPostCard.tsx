import { Post } from '@/types';
import { urlFor } from '@/utils';
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
      href={`/blog/${post.slug.current}`}
      role="listitem"
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <Image src={urlFor(post.mainImage).url()} alt="" fill />
      </div>

      <div className={styles.contentContainer}>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.content}>{post.summary}</p>
      </div>
    </Link>
  );
};
