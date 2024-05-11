import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetMovies from "../redux/action";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Movies = () => {
  const dispatch = useDispatch();
  const MoviesData = useSelector((data) => data.movies);
  useEffect(() => {
    dispatch(GetMovies());
  }, []);
  const [data, setData] = useState(MoviesData);
  return (
    <SimpleGrid
      columns={[2, 3, 5]}
      spacing="40px"
      w={"95%"}
      m={"auto"}
      minH="88vh"
    >
      {MoviesData.length > 0 &&
        MoviesData?.map((ele) => {
          return (
            <Box border={"1px solid black"} key={ele.imdbID}>
              <Image src={ele.Poster} w={"100%"} height={"80%"} />
              <Text fontSize={14}>{ele.Title}</Text>
            </Box>
          );
        })}
    </SimpleGrid>
  );
};

export default Movies;
