import {
  VStack,
  Text,
  Container,
  Flex,
  FormControl,
  Input,
  Image,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import FormData from "./FormData";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  gender: "",
  date: "",
  time: "",
};

function Book() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlechange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};

    if (!form.firstname) newErrors.firstname = "First name is required";
    if (!form.lastname) newErrors.lastname = "Last name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.date) newErrors.date = "Appointment date is required";
    if (!form.time) newErrors.time = "Appointment time is required";

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <VStack bgColor={"#00525D"} p={5} border={"2px solid white"}>
      <VStack mt={10}>
        <Text
          fontSize="4xl"
          bgColor={"#e29d3c"}
          bgClip="text"
          fontWeight="extrabold"
        >
          Welcome to Our Online Appointment Booking
        </Text>
        <Flex w="100%" display="flex" justifyContent={"space-between"}>
          <Container w="40%" m="auto">
            <VStack>
              <Image
                borderRadius="50%"
                width="100%"
                src="/Images/MediCare.png"
                alt="doctor"
              />
            </VStack>
          </Container>

          <VStack w="60%" m={"auto"} p={5}>
            <Container bgColor={"white"} p={10} borderRadius="50px">
              <form onSubmit={handleSubmit}>
                <FormControl textAlign={"left"}>
                  <Input
                    type="text"
                    placeholder="First name"
                    name="firstname"
                    value={form.firstname}
                    onChange={handlechange}
                  />
                  {errors.firstname && (
                    <Text color="red">{errors.firstname}</Text>
                  )}
                  <br /><br />

                  <Input
                    type="text"
                    placeholder="Last name"
                    name="lastname"
                    value={form.lastname}
                    onChange={handlechange}
                  />
                  {errors.lastname && (
                    <Text color="red">{errors.lastname}</Text>
                  )}
                  <br /><br />

                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handlechange}
                  />
                  {errors.email && <Text color="red">{errors.email}</Text>}
                  <br /><br />

                  <label>Date of Birth</label>
                  <br />
                  <Input type="date" placeholder="Date of Birth" />
                  <br /><br />

                  <Input type="number" placeholder="Mobile Number" />
                  <br /><br />

                  <Select
                    placeholder="Gender"
                    name="gender"
                    value={form.gender}
                    onChange={handlechange}
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Others">Others</option>
                  </Select>
                  {errors.gender && <Text color="red">{errors.gender}</Text>}
                  <br /><br />

                  <label>Appointment Date</label>
                  <br />
                  <Input
                    type="date"
                    placeholder="Appointment Date"
                    name="date"
                    value={form.date}
                    onChange={handlechange}
                  />
                  {errors.date && <Text color="red">{errors.date}</Text>}
                  <br /><br />

                  <label>Appointment Time</label>
                  <br />
                  <Input
                    type="time"
                    placeholder="Appointment Time"
                    name="time"
                    value={form.time}
                    onChange={handlechange}
                  />
                  {errors.time && <Text color="red">{errors.time}</Text>}
                  <br /><br />

                  <Input
                    type="submit"
                    name="Submit"
                    color="white"
                    borderRadius={20}
                    bgColor={"#00525D"}
                  />
                </FormControl>
              </form>
            </Container>

            {isSubmitted && (
              <Container
                bgColor={"white"}
                p={10}
                borderRadius="50px"
                fontSize={"20px"}
                textAlign={"left"}
              >
                <Text fontSize="2xl">Your Appointment Details-</Text>
                {isSubmitted && <FormData {...form} />}
              </Container>
            )}
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default Book;
