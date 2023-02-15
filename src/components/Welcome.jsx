import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://images.everydayhealth.com/images/why-you-could-be-drinking-more-than-you-think-1440x810.jpg?w=1110"
            alt="beer"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;
