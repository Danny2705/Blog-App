import { React, useState } from "react";
import { signupUser } from "../../service/api.service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        username,
        email,
        password,
      };
      const data = await signupUser(userData);

      if (data.error) {
        toast.error(data.error);
      } else {
        setUsername("");
        setEmail("");
        setPassword("");
        toast.success("Sign Up successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
          <h1 className='text-xl text-center'>Sign Up </h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='border-b flex flex-col'>
              <label htmlFor=''>Username</label>
              <input
                type='text'
                placeholder='Username'
                className='outline-none'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='border-b flex flex-col'>
              <label htmlFor=''>Email</label>
              <input
                type='text'
                placeholder='Email'
                className='outline-none'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='border-b flex flex-col'>
              <label htmlFor=''>Password</label>
              <input
                type='text'
                placeholder='Password'
                className='outline-none'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex justify-between'>
              <button
                type='submit'
                className='border flex mx-auto bg-red-600 text-white py-1 px-3 items-center rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
