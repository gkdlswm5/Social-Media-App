import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => {
  axios.get(url).then((data) => {
    return data;
  });
};

// export const fetchPosts = () => {
//   axios.get("/posts").then((data) => console.log(data));
// };

export const createPost = (newPost) => {
  axios.post(url, newPost);
};
