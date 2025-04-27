import React from 'react';

interface CardProps {
  title: string;
  content: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      {footer && <div className="px-6 py-4 border-t">{footer}</div>}
    </div>
  );
};

export default Card;
