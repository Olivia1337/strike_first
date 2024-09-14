import React from "react";

function NewsCard(props) {
  return (
    <div
      className="w-1/3 my-4 relative flex items-center bg-white text-gray-900 p-6 rounded-lg shadow-sm flex flex-col"
      aria-labelledby={`${props.title}-heading`}
    >
      <h3 className="text-2xl font-bold text-amber-600 mb-4">{props.title}</h3>
      <p
        className="text-lg font-medium"
        dangerouslySetInnerHTML={{ __html: props.text }}
        aria-label="News content"
      />
    </div>
  );
}

export default NewsCard;
