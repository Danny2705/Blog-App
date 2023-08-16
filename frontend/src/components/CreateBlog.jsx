import React, { useState, useEffect } from "react";
import { createBlog, updateBlog } from "../../service/api.service";
import { AiOutlineClose } from "react-icons/ai";

function CreateBlog({ setBlogs, getAllBlogs, blogToEdit, edit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isEditMode, setIsEditMode] = useState(edit);

  const handleCreate = async () => {
    try {
      const newBlog = {
        title: title,
        description: description,
        image: imageUrl,
      };
      await createBlog(newBlog);
      setTitle("");
      setDescription("");
      setImageUrl("");
      getAllBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedBlogData = {
        title: title,
        description: description,
        image: imageUrl,
      };
      await updateBlog(blogToEdit._id, updatedBlogData);
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === blogToEdit._id ? { ...blog, ...updatedBlogData } : blog
        )
      );
      setIsEditMode(false);
      setTitle("");
      setDescription("");
      setImageUrl("");
      getAllBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsEditMode(false);
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  useEffect(() => {
    if (edit && blogToEdit) {
      setTitle(blogToEdit.title);
      setDescription(blogToEdit.description);
      setImageUrl(blogToEdit.image);
      setIsEditMode(true);
    } else {
      setTitle("");
      setDescription("");
      setImageUrl("");
      setIsEditMode(false);
    }
  }, [edit, blogToEdit]);

  return !isEditMode ? (
    <div className='shadow-2xl w-[400px] h-[23rem] p-4' id='create'>
      <h1 className='text-center text-xl font-bold'>Create your post today</h1>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col'>
          <label>Title</label>
          <input
            type='text'
            placeholder='Title'
            value={title}
            className='border p-2 mt-2 outline-none'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Description</label>
          <input
            type='text'
            placeholder='Description'
            value={description}
            className='border p-2 mt-2 outline-none'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Image URL</label>
          <input
            type='text'
            placeholder='Image URL'
            value={imageUrl}
            className='border p-2 mt-2 outline-none'
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
      </div>

      <button
        className='flex mx-auto border bg-blue-400 mt-5 py-1 px-4 rounded-md'
        onClick={handleCreate}
      >
        Post
      </button>
    </div>
  ) : (
    <div className='shadow-2xl w-[400px] h-[23rem] p-4'>
      <div className='relative'>
        <h1 className='text-center text-xl font-bold'>Edit your post</h1>
        <AiOutlineClose
          className='text-blue-400 cursor-pointer absolute right-0 bottom-0'
          onClick={handleClose}
        />
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col'>
          <label>Title</label>
          <input
            type='text'
            placeholder='Title'
            value={title}
            className='border p-2 mt-2 outline-none'
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label>Description</label>
          <input
            type='text'
            placeholder='Description'
            value={description}
            className='border p-2 mt-2 outline-none'
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label>Image URL</label>
          <input
            type='text'
            placeholder='Image URL'
            value={imageUrl}
            className='border p-2 mt-2 outline-none'
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
      </div>

      <button
        className='flex mx-auto border bg-blue-400 mt-5 py-1 px-4 rounded-md'
        onClick={handleUpdate}
      >
        Save Changes
      </button>
    </div>
  );
}

export default CreateBlog;
