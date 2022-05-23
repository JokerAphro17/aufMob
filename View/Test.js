import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Text, Box, Center, Spinner, Heading, HStack } from "native-base";

const Loader = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};

const Test = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.137.43:5500/posts")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Center h="100">
      {loading ? <Loader /> : <Text>{data[4].message}</Text>}
    </Center>
  );
};

export default Test;
