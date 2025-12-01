'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight, Eye } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { fetchMediumPosts } from '@/lib/fetchMediumPosts';
import { useImageConsent } from '@/hooks/useImageConsent';
import placeholder from '@/assets/placeholder.png'

import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', "600", "700", "800"] });

interface BlogPost {
    id: string;
    title: string;
    description: string;
    image: string | null;
    content: string;
    pubDate: string;
    readingTime: string;
    link: string;
}

const Blogs = () => {
    const { data: blogData, isLoading, error } = useQuery<BlogPost[]>({
        queryKey: ['medium-posts'],
        queryFn: fetchMediumPosts,
        staleTime: 1000 * 60 * 10,
    });
    const [visibleCount, setVisibleCount] = useState(3);
    const showImages = useImageConsent();

    const visibleBlogs = blogData?.slice(0, visibleCount) || [];

    return (
        <div id="blogs" className="">
            <div className="md:flex items-center my-16 text-xl">
                <div className="md:w-6/12 text-center md:text-left leading-14">
                    <p className={`text-3xl md:text-4xl 2xl:text-[40px] font-semibold ${sora.className}`}>Voices from the Lab to the Line.</p>
                    <Button variant={'link'} className="font-semibold px-0 cursor-pointer text-xl 2xl:text-2xl text-[#00525E]">
                        Blogs <ArrowUpRight />
                    </Button>
                </div>
                <div className="md:w-6/12 flex justify-center md:justify-end font-normal leading-8">
                    <p className="w-11/12 md:w-10/12 lg:w-8/12 text-center md:text-start text-[#000000B2] ">
                        Learnings from engineers, makers, and problem-solvers at work.
                    </p>
                </div>
            </div>

            {isLoading ? (
                <p className="text-center">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">Failed to load blog posts.</p>
            ) : (
                <>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-10">
                        {visibleBlogs.map((blog, index) => (
                            <div key={blog.id || index} className="rounded-2xl overflow-hidden">
                                {blog.image && (
                                    <Image
                                        src={showImages ? blog.image : placeholder}
                                        alt={blog.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-64 object-cover"
                                    />
                                )}
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold">{blog.title}</h3>
                                    <p className="text-[#000000B2] mb-4">{blog.description}</p>
                                    <a
                                        href={blog.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#00525E] hover:underline"
                                    >
                                        Read Now <ArrowUpRight className="inline w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleCount < (blogData?.length || 0) && (
                        <div className="text-center pb-20">
                            <Button
                                variant="primary"
                                onClick={() => setVisibleCount((prev) => prev + 3)}
                            >
                                <Eye className="inline mr-2" />
                                View More
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Blogs;
