import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../service/api.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email,
        password,
      };
      const data = await loginUser(userData);

      if (data.error) {
        console.log(data.error);
        toast.error(data.error);
      } else {
        dispatch(
          login({
            email: email,
            password: password,
            loggedIn: true,
          })
        );
        setEmail("");
        setPassword("");
        toast.success("Logged in successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex justify-center items-center h-[85.9vh]'>
      <div className='mr-[5rem]'>
        <img
          src='https://thumbs.dreamstime.com/b/cartoon-man-working-computer-13780903.jpg'
          alt='Working period'
          width={500}
          className='flex flex-start object-cover'
        />
      </div>
      <div className='flex flex-col flex-start border gap-8 p-4 border-black w-[400px]'>
        <h1 className='text-xl text-center'>Log in </h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='border-b flex flex-col gap-2'>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              placeholder='Username'
              className='outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='border-b flex flex-col gap-2'>
            <label htmlFor=''>Password</label>
            <input
              type='text'
              placeholder='Password'
              className='outline-none'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-end items-center'>
            <Link to='/signup'>
              <span className='hover:underline transition-all duration-500 ease-in '>
                Don't have an account?
              </span>
            </Link>
          </div>

          <button
            type='submit'
            className='border flex mx-auto bg-red-600 text-white py-1 px-3 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
