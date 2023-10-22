import { HeroSection } from '@/components';
import { Post } from '@/types';
import { client, urlFor } from '@/utils';
import { PortableText } from '@portabletext/react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import backArrowImage from '../../../../public/images/arrow-back-8.webp';
import styles from './page.module.css';

const BlogPostPage: NextPage<{ params: { slug: string } }> = async ({
  params: { slug },
}) => {
  const post = await client.fetch<Post>(
    '*[_type == "post" && slug.current == $slug][0]',
    { slug }
  );

  return (
    <>
      <div
        className="w-layout-blockcontainer w-container"
        style={{ paddingLeft: '1rem' }}
      >
        <Link href="/blog" className={styles.backButton}>
          <Image src={backArrowImage} alt="back arrow" width={20} height={20} />
          Blog
        </Link>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.imageContainer}>
          <Image src={urlFor(post.mainImage).url()} alt="" fill />
        </div>

        <PortableText value={post.body} />

        <HeroSection />
      </div>
    </>
  );
};

export default BlogPostPage;
