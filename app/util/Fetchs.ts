import { client } from "@/sanity/lib/client";

export const getData = async () => {
  const query = `*[_type == 'post'] {
  title,
  slug,
  publishedAt,
  mainImage{
    asset->{
      _id,
      url
    }
  },
  author->{
    name,
    image{
      asset->{
        _id,
        url
      }
    }
  },
  categories[]->{
    title
  },
  body
}`;
  const data = await client.fetch(query);
  return data;
};

export const getLatestPost = async () => {
  const query = `
 *[_type == "post"]| order(publishedAt desc)[0]{
  title,
  slug{
    current
  },
  publishedAt,
  mainImage{
    asset->{
      url
    }
  },
  author->{
    name,
    image{
      asset->{
        url
      }
    }
  },
  categories[]->{
    title
  }
}`;
  const data = await client.fetch(query);
  return data;
};

export const getPopularPost = async () => {
  const query = `
  *[_type == 'post' && publishedAt < now()] | order(views desc) [0..4] {
    _id ,
    title ,
    "slug" : slug.current,
    mainImage {
      alt,
      'image' : asset._ref
    },
    author-> {
      name,
     "image" : image.asset._ref
    },
    categories[]-> {
      title
    },
    body,
    publishedAt
  }`;
  const data = await client.fetch(query);
  return data;
};

export const getPost = async (post: string) => {
  const query = `
  *[_type == 'post' && slug.current == "${post}"][0] {
    _id ,
    title ,
    "slug" : slug.current,
    mainImage {
      alt,
      'image' : asset._ref
    },
    author-> {
      name,
     "image" : image.asset._ref
    },
    categories[]-> {
      title
    },
    body ,
    publishedAt
  }`;
  const data = await client.fetch(query);
  return data;
};

export const getCategories = async () => {
  const query = `*[_type == "post"]{
    categories[]->{
      title
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
};

