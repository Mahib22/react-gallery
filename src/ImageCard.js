import React from "react";

function ImageCard({ image }) {
  const tags = image.tags.split(",");

  return (
    <div className="lg:w-1/3 sm:w-1/2 p-2">
      <div className="flex relative">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
          src={image.webformatURL}
          alt={`img-${image.id}`}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Photo by {image.user}
          </h1>
          <ul className="leading-relaxed my-6">
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
