"use client";
import { getData } from "@/app/util/Fetchs";
import React, { useEffect, useState } from "react";
import Postscards from "../Posts/Postscards";
import PostcardsSkeleton from "../LoadingBlock/PostcardSkeleton";
import { PostInterfaces } from "@/app/util/PostDefn";



const Contents = () => {
  const [filteredPost, setFilteredPost] = useState<PostInterfaces[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts: PostInterfaces[] = await getData();
        // Fetch only the first four posts
        const limitedPosts = allPosts.slice(0, 4);
        setFilteredPost(limitedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div className="flex w-full flex-wrap justify-center items-start gap-4 h-fit">
      {loading ? (
        <div>
          <PostcardsSkeleton />
        </div>
      ) : (
        filteredPost.length > 0 ? (
          filteredPost.map((item, index) => (
            <Postscards
              key={index}
              category={item.categories[0]?.title || "muuza"}
              date={item.publishedAt}
              image={item.mainImage.asset.url}
              slug={item.slug.current}
              title={item.title}
            />
          ))
        ) : (
          <div>No posts available.</div>
        )
      )}
    </div>
  );
};

export default Contents;
