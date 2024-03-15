import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="grid place-items-center py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
