import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useQuery } from "react-query";
import logo from "../logo.svg";

const API_URL = process.env.REACT_APP_API_URL;

const LoginPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["loginData"],
    queryFn: () => fetch(`${API_URL}/users`).then((res) => res.json()),
  });
  console.log(data);
  return (
    <Box>
      <Image src={logo}></Image>
    </Box>
  );
};
export default LoginPage;
