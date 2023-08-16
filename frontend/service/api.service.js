import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getBlog = async () => {
  return await httpClient
    .get("/blog")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createBlog = async (blog) => {
  return await httpClient
    .post("/blog", blog)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateBlog = async (id, blog) => {
  return await httpClient
    .put(`/blog/${id}`, blog)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteBlog = async (id) => {
  return await httpClient
    .delete(`/blog/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUsers = async () => {
  return await httpClient
    .get("/user")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signupUser = async (user) => {
  return await httpClient
    .post("/user/signup", user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginUser = async (user) => {
  return await httpClient
    .post("/user/login", user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateUser = async (id, user) => {
  return await httpClient
    .put(`/user/${id}`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUser = async (id) => {
  return await httpClient
    .delete(`/user/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
