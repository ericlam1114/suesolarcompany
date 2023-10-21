import { Metadata } from 'next';

type MetadataWithTitleAndDescription = Omit<
  Metadata,
  'title' | 'description'
> & {
  title: string;
  description: string;
};

export const populateMetadata = (
  metadata: MetadataWithTitleAndDescription
): Metadata => {
  const { title, description } = metadata;

  return {
    ...metadata,

    openGraph: {
      ...metadata.openGraph,
      title,
      description,
      type: 'website',
    },

    twitter: {
      ...metadata.twitter,
      title,
      description,
      card: 'summary_large_image',
    },
  };
};
