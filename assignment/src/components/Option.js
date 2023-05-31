import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react"


const Option = ({ imageUrl, heading, subHeading }) => {
    return (
        <HStack gap={10}>
            <Box border="1px solid grey" borderRadius={40} p={10} pt={-40}>
                <Image w={50} src={imageUrl} />
            </Box>
            <Box w={280}>
                <Text fontSize={17} fontWeight={500}>{heading}</Text>
                <Text fontSize={17} mt={-15}>{subHeading}</Text>
            </Box>
        </HStack>
    )
}

export default Option