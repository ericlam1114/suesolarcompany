export type Post = {
  createdAt: string;
  updatedAt: string;
  slug: {
    current: string;
  };
  body: any[];
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  _id: string;
  summary: string;
};
