import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import logo from "../assets/icons8-male-user-24 (1).png";

const Navbar = () => {
  return (
    <Box pl={100} pr={100} mt={15} display="flex" gap={600}>
        <Box>
            <Image w={200} src="data:image/png;base64,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" />
        </Box>
        <Box display="flex" gap="25px">
            <Text fontSize={20} fontWeight={500} color="rgba(128, 0, 128, 0.5)">My Assignment</Text>
            <Text fontSize={20} fontWeight={500} color="rgba(128, 0, 128, 0.5)">Chat with Mentor</Text>
            <Box display="flex" gap="5px">
                <Image w={30} h={30} src={logo} mt={20} />
                <Text fontSize={20} fontWeight={500} color="#800080">Profile Name</Text>
            </Box>
        </Box>
    </Box>
  );
};

export default Navbar;
