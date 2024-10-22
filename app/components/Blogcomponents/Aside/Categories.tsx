"use client"; // Ensure this is a client-side component

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getData } from '@/app/util/Fetchs';
import Skeleton from 'react-loading-skeleton';
import { PostInterfaces } from '@/app/util/PostDefn';

interface CategoryCount {
  title: string;
  count: number;
}

const Categories: React.FC = () => {
  const [categoriesWithCounts, setCategoriesWithCounts] = useState<CategoryCount[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts: PostInterfaces[] = await getData();

        const categoryCounts: { [key: string]: number } = {};

        posts.forEach(post => {
          post.categories.forEach(category => {
            categoryCounts[category.title] = (categoryCounts[category.title] || 0) + 1;
          });
        });

        const categories = Object.entries(categoryCounts).map(([title, count]) => ({
          title,
          count
        }));

        setCategoriesWithCounts(categories);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setLoading(false); // Ensure loading is false even if there's an error
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='w-full flex flex-col gap-4 items-start pt-4 pl-2 text-skin1 '>
      {loading ? (
        // Show loading state while fetching data
        <Skeleton width={100} height={20} />
      ) : (
        categoriesWithCounts.map(category => (
          <Link key={category.title} className='bg-skin3 py-1 px-4 rounded-sm' href={`/Blog/${category.title.toLowerCase()}`}>
            {`${category.title} (${category.count})`}
          </Link>
        ))
      )}
    </div>
  );
};

export default Categories;
