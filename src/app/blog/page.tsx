import { BlogPostsGrid } from '@/components';
import { NextPage, Metadata } from 'next';
import { Post } from '@/types';
import { client } from '@/utils';

export const metadata:Metadata= {
   title:"Blog Posts"
  
}

export const revalidate = 10

const BlogPage: NextPage = async () => {
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"]|order(publishedAt desc)`
  );

  const limitedPosts = posts.slice(0, 100); // Limit to 4 posts
  return (
    <>
      <div
        className="w-layout-blockcontainer w-container"
        style={{ paddingLeft: '1rem' }}
      >
        <h1>Blog Posts</h1>
        {/* <a href="/qsbs-calculator">click here</a> */}
      </div>
      <div className="w-dyn-list">
        <BlogPostsGrid posts={limitedPosts} />
      </div>
    </>
  );
};

export default BlogPage;
