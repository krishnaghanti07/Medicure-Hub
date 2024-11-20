import { Flex, Spacer, Button, Image, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginSignup from "../LoginSignup";  // Import the LoginSignup component

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State to control form visibility and login status
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Handle login (callback from the LoginSignup component)
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData); // You can save the token or user details here
    setShowLoginForm(false); // Hide the form once logged in
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);  // Clear user session
  };

  return (
    <>
      <Flex
        position="sticky"
        justifyContent={"space-between"}
        top={0}
        width="100%"
        alignItems="center"
        bgColor="#00525d"
        p={4}
        pr={10}
        pl={10}
        height="60px"
        zIndex={1}
      >
        <Image src="/Images/MediCare Logo.png" width="60px" />
        <Spacer />
        <LinkButton href="/" isActive={location.pathname === "/"}>
          Home
        </LinkButton>
        <Spacer />
        <LinkButton
          href="/medicines"
          isActive={location.pathname === "/medicines"}
        >
          Medicines
        </LinkButton>
        <Spacer />
        <LinkButton href="/doctors" isActive={location.pathname === "/doctors"}>
          Doctors
        </LinkButton>
        <Spacer />
        <LinkButton href="/about" isActive={location.pathname === "/about"}>
          About Us
        </LinkButton>

        <Flex gap={6} ml={20}>
          {isLoggedIn ? (
            <>
              <Text color="white">Welcome, {user?.email || "User"}</Text>
              <Button colorScheme="red" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button colorScheme="blue" onClick={() => setShowLoginForm(true)}>
                Login
              </Button>
              <Spacer />
              <Button colorScheme="green" onClick={() => setShowLoginForm(true)}>
                Sign Up
              </Button>
            </>
          )}
        </Flex>
      </Flex>

      {/* Show LoginSignup form only if showLoginForm is true */}
      {showLoginForm && <LoginSignup onLogin={handleLogin} />}
    </>
  );
};

function LinkButton({ children, href, isActive }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="link"
      colorScheme={isActive && "blue"}
      onClick={() => navigate(href)}
      color={isActive ? "orange" : "white"}
      fontWeight={isActive ? "bold" : "normal"}
      fontSize={isActive ? "xl" : "lg"}
    >
      {children}
    </Button>
  );
}
