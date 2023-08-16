import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiPen } from "react-icons/bi";
import { deleteBlog } from "../../service/api.service";

function Blog({ blog, onUpdateBlog, refreshBlog, setEdit }) {
  const handleEdit = () => {
    onUpdateBlog(blog);
    setEdit();
  };

  const handleDelete = async () => {
    try {
      await deleteBlog(blog._id);
      refreshBlog();
      setEdit(true);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTimeDifference = () => {
    const createdAt = new Date(blog.createdAt);
    const currentTime = new Date();
    const timeDifferenceInMillis = currentTime - createdAt;
    const hoursDifference = Math.floor(
      timeDifferenceInMillis / (1000 * 60 * 60)
    );
    const minutesDifference = Math.floor(timeDifferenceInMillis / (1000 * 60));

    if (hoursDifference > 0) {
      return `${hoursDifference} ${
        hoursDifference === 1 ? "hour" : "hours"
      } ago`;
    } else {
      return `${minutesDifference} ${
        minutesDifference === 1 ? "minute" : "minutes"
      } ago`;
    }
  };

  return (
    <div className='flex flex-col justify-center max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-5 mb-4 gap-2'>
      <div className='flex justify-end items-center gap-4 text-2xl font-bold'>
        <BiPen className='text-[#6e6b6b] cursor-pointer' onClick={handleEdit} />
        <AiOutlineDelete
          className='text-[#be343499] cursor-pointer'
          onClick={handleDelete}
        />
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='font-medium text-xl'>{blog.title}</h1>
        <p className='text-[#b6b2b2] font-medium'>
          {calculateTimeDifference()}
        </p>
      </div>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.description}</p>
    </div>
  );
}

export default Blog;
