import { useQuery } from "react-query";
import axios from "axios";

const userStats = async () => {
  const { data } = await axios.get(
    "http://localhost:3001/auth/userdata", {withCredentials: true}
  );
  return data;
};

export default function useUserStats() {
  return useQuery("stats", userStats);
}
