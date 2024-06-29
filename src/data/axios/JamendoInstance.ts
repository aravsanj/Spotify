import axios from "axios";

const JamendoInstance = axios.create({
  baseURL: "https://api.jamendo.com",
});

export default JamendoInstance;
