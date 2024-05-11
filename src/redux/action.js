import { MOVIES_LOADING, MOVIES_SUCCESS, MOVIES_ERROR } from "./actionTypes";
import axios from "axios";
const GetMovies = (page) => async (dispatch) => {
  console.log("hlo..");
  try {
    dispatch({ type: MOVIES_LOADING });
    const data = await axios.get(`http://localhost:8080/movies`);
    console.log(data, "data..");
    dispatch({ type: MOVIES_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: MOVIES_ERROR });
  }
};

export default GetMovies;
