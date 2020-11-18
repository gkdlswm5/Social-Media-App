import * as api from "../api/index";

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    // const { data } = await api.fetchPosts();
    // const response = await api.fetchPosts();
    const response = await api.fetchPosts();

    console.log("fetch_all");

    console.log(response);
    dispatch({ type: "FETCH_ALL", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(data);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
