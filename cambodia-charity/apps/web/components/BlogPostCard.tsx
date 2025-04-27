import React from 'react';

interface BlogPostCardProps {
  title: string;
  content: string;
  date: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, content, date }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
