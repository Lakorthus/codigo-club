import { IBlogList } from './BlogList';

const base: IBlogList = {
  posts: [
    {
      author: {
        _createdAt: '2021-03-01T14:00:00Z',
        _id: 'author-1',
        _rev: '1',
        _type: 'author',
        _updatedAt: '2021-03-01T14:00:00Z',
        bio: [
          {
            _key: '1',
            _type: 'block',
            children: [
              {
                _key: '1',
                _type: 'span',
                marks: [],
                text: 'Author 1',
              },
            ],
            markDefs: [],
            style: 'normal',
          },
        ],
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-1',
            _type: 'reference',
          },
        },
        name: 'Author 1',
        slug: {
          _type: 'slug',
          current: 'author-1',
        },
      },
      body: [
        {
          _key: '1',
          _type: 'block',
          children: [
            {
              _key: '1',
              _type: 'span',
              marks: [],
              text: 'Post 1',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      categories: [
        {
          description: 'Category 1',
          title: 'Category 1',
          _createdAt: '2021-03-01T14:00:00Z',
          _id: 'category-1',
          _rev: '1',
          _type: 'category',
          _updatedAt: '2021-03-01T14:00:00Z',
        },
      ],
      mainImage: {
        _type: 'image',
        asset: {
          _ref: 'image-1',
          _type: 'reference',
        },
      },
      slug: {
        _type: 'slug',
        current: 'post-1',
      },
      title: 'Post 1',
      description: 'Post 1',
      _createdAt: '2021-03-01T14:00:00Z',
      _id: 'post-1',
      _rev: '1',
      _type: 'post',
      _updatedAt: '2021-03-01T14:00:00Z',
    },
  ],
};

export const mockBlogListProps = {
  base,
};
