import axios from "axios";

const BASE_URL = "http://localhost:3000/blogs";

export const getBlogs = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getBlogById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const createBlog = async (blog) => {
  const res = await axios.post(BASE_URL, blog);
  return res.data;
};
