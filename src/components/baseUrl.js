import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const getPhotos = async (data, curentPage) => {
  const params = {
    query: data,
    page: curentPage,
    per_page: 15,
    client_id: "12_CemR0-ylx8v3obvcQn0UsGoQ6hoGbx_nd5LssPaY",
  };
  const response = await axios.get("/photos", {
    params,
  });
  return response.data;
};
