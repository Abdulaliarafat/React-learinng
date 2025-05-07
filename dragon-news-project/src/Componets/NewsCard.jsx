import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaBookmark, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id,
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl">
      <div className="flex items-center justify-between rounded-lg p-4 bg-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h2 className="font-bold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className=" flex gap-2 text-gray-400 text-xl cursor-pointer">
            <span><FaBookmark color="red" />
            </span>
          <span className="hover:text-primary"><CiShare2 />
          </span>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <img src={image_url} alt={title} className="w-full h-56 object-cover rounded mb-3" />
        <p className="text-sm text-gray-700">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <div className="mt-3">
          <Link to={`/news-details/${id}`} className="text-blue-600 font-semibold hover:underline cursor-pointer">
            Read More
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-t-2 border-dashed border-gray-200 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span>{rating.number}</span>
          <span className="badge badge-secondary ml-2">{rating.badge}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
