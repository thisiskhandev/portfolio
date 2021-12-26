import React from "react";
import Blogs from "../../Blogs";

const BlogsPage = () => {
  return (
    <>
      <main className="blogs_page my-5 py-5">
        <section className="container">
          <div className="row">
            <div className="col-12">
              <Blogs />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default BlogsPage;
