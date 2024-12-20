import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <VStack>
      <Box width="100%">
        <img src="/Images/Home.png" alt="Home" width="100%" />
      </Box>
      <VStack spacing={1} w={"70%"} m={4}>
        <Text fontSize="6xl" color={"#00525D"}>
          Healthcare Services
        </Text>
        <Text fontSize="xl" color={"#00525D"}>
          The MediCare app provides users with easy access to essential
          healthcare services, offering a wide range of medications and medical
          supplies for purchase. It ensures fast and secure ordering with
          delivery options, along with features like prescription management and
          health advice. MediCare is designed to support both routine and
          emergency healthcare needs, making it a reliable platform for managing
          health at your fingertips.
        </Text>
      </VStack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "15px",
          width: "80%",
          margin: "5px",
          marginBottom: "20px",
        }}
      >
        <VStack border={"2px solid black"} pt={8} pb={8} borderRadius={10}>
          <img src="/Images/consultancy.png" alt="home" />
          <Text fontSize="2xl">Online Consultancy</Text>
        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8} borderRadius={10}>
          <img src="/Images/Hospital.png" alt="home" />
          <Text fontSize="2xl">Hospital</Text>
        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8} borderRadius={10}>
          <img src="/Images/Medicine.png" alt="home" />
          <Text fontSize="2xl">Medicines</Text>
        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8} borderRadius={10}>
          <img src="/Images/test.png" alt="home" />
          <Text fontSize="2xl">Tests</Text>
        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8} borderRadius={10}>
          <img src="/Images/nurding.png" alt="home" />
          <Text fontSize="2xl">Nursing</Text>
        </VStack>

        <VStack border={"2px solid black"} pt={8} pb={8} borderRadius={10}>
          <img src="/Images/emergency.png" alt="home" />
          <Text fontSize="2xl">Emergency</Text>
        </VStack>
      </div>
      <Box width={"100%"} m={8}>
        <img src="/Images/data.png" alt="data" width="100%" />
      </Box>
    </VStack>
  );
};
