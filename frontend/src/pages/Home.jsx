import React, { useEffect, useState } from "react";
import { getBlog } from "../../service/api.service";
import Blog from "../components/Blog";
import CreateBlog from "../components/CreateBlog";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [edit, setEdit] = useState(false);

  const getAllBlogs = async () => {
    const blogData = await getBlog();
    setBlogs(blogData);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div className='mt-3 px-[2rem] flex gap-[3rem]'>
      <div className='blog w-[56rem]'>
        {blogs.length > 0 ? (
          blogs &&
          blogs.map((blog) => (
            <Blog
              key={blog._id}
              blog={blog}
              onUpdateBlog={setEditingBlog}
              setEdit={() => setEdit(!edit)}
              refreshBlog={getAllBlogs}
            />
          ))
        ) : (
          <p className='flex items-center justify-center text-2xl w-[56rem] max-h-full'>
            Loading...
          </p>
        )}
      </div>

      <CreateBlog
        setBlogs={setBlogs}
        getAllBlogs={getAllBlogs}
        blogToEdit={editingBlog}
        edit={edit}
      />
    </div>
  );
}

export default Home;
