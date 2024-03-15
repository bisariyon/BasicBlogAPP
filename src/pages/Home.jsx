import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No posts available
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return authStatus ? (
    <div className="w-full py-8 px-10">
      <div className="grid text-center py-2 mb-5">
        <h1 className="text-5xl hover:font-bold text-yellow-200 font-semibold hover:text-green-700 italic ">This is Home page</h1>
      </div>

      <Container>
        <div className="flex flex-wrap justify-center">
          {/* {posts.map((post) => ( */}
          {posts.slice(0, 7).map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
        <div className="text-3xl text-white hover:text-slate-800 mt-8 text-center font-bold">
          <Link to="/all-posts">Click to load more...</Link>
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8 px-10">
      <Container>
        <div className="flex flex-wrap justify-center">
          {posts.slice(0, 4).map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>

      <div className="w-full py-8 text-center">
        <h1 className="text-2xl font-bold text-slate-500">
          <span className="text-3xl text-white hover:text-slate-800">
            <Link to="/login">Login </Link>
          </span>
          to View more posts
        </h1>
      </div>
    </div>
  );
}

export default Home;
