import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 31e05014abdc73d6f02b88caf2b462f455ec758ce3e46a4180fb62b7e248b1cc"
  }
});
