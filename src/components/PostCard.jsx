import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-red-200 rounded-xl py-4">
        <div className="w-full flex  justify-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl h-32 px-4"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl pt-2 font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
