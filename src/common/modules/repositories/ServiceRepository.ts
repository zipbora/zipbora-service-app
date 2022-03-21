import axios from "axios";

// request functionality only for method. no mapping, no business
// use qs in making and parsing query string
const ServiceRepository = {
  async createSomething() {
    try {
      const res = await axios.get(
        "https://api.tvmaze.com/search/shows?q=batman",
      );
      return res;
    } catch (error) {
      return new Error("create something err");
    }
  },
};

export default ServiceRepository;
