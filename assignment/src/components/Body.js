import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react"
import Option from "./Option";
import logoIcon from "../assets/icons8-group-64.png"
import rupeeIcon from "../assets/icons8-rupee-24.png";
import walletIcon from "../assets/icons8-wallet-50.png";
import tagIcon from "../assets/icons8-price-tag-50.png";
import discountIcon from "../assets/icons8-discount-50.png";

const Body = () => {
    return (
        <Box pl={250} fontWeight={400} >
            <Box boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;" pb={15} pt={5} w="40%">
                <Text>UI/UX {">"} Refer & Earn</Text>
            </Box>
            <Box display="flex" mt="40px">
                <Box boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" borderRadius={20} pl={20} pr={20} pb={30}>
                    <HStack gap="40px">
                        <VStack>
                            <Text mb="-5px" fontSize={17} color="#800080" fontWeight={500}>Referral Earning</Text>
                            <Text fontSize={33} fontWeight={500}>₹ 2,500</Text>
                        </VStack>
                        <VStack>
                            <Text mb="-5px" fontSize={17} color="#800080" fontWeight={500}>Total Referrals</Text>
                            <Text fontSize={33} fontWeight={500}>7</Text>
                        </VStack>
                        <VStack>
                            <Text mb="-5px" fontSize={17} color="#800080" fontWeight={500}>Wallet Balance</Text>
                            <Text fontSize={33} fontWeight={500}>₹ 500</Text>
                        </VStack>
                    </HStack>
                    <Button fontSize={18} pt="10px" pb="10px" pl="15px" pr="15px" bgColor="#800080" color="white" border="1px solid #800080" display="block" margin="auto" mt="35px" cursor="pointer" borderRadius={20}>Withdraw Balance</Button>
                </Box>
                <Box w="40%">
                    <Text fontSize="25px" fontWeight={700} mt="4px" color="#800080" pl="100px">Your Referral Code</Text>
                        <HStack gap="30px" w={320} pl={50} ml={100} border="2px solid #800080" borderRadius={15}>
                            <Text fontWeight={500} fontSize="20px" color="#800080">E</Text>
                            <Text fontWeight={500} fontSize="20px" color="#800080">D</Text>
                            <Text fontWeight={500} fontSize="20px" color="#800080">C</Text>
                            <Text fontWeight={500} fontSize="20px" color="#800080">H</Text>
                            <Text fontWeight={500} fontSize="20px" color="#800080">5</Text>
                            <Text fontWeight={500} fontSize="20px" color="#800080">4</Text>
                        </HStack>
                </Box>
            </Box>
            <Box mt="35px">
                <Text fontWeight={700} color="#800080" fontSize="25px">How does it work ?</Text>
            </Box>
            <Box display="flex" gap="30px">
                <VStack>
                    <Option imageUrl={logoIcon} heading={"Invite your Friends"} subHeading={"Share the link tutedude.com with your friends"} />
                    <Option imageUrl={rupeeIcon} heading={"You get ₹ 200 as referral money"} subHeading={"On total purchase the friend makes, into your wallet"} />
                    <Option imageUrl={walletIcon} heading={"Transfer money from wallet"} subHeading={"When the wallet balance reaches ₹200 or more, you can withdraw it"} />
                </VStack>'
                <VStack>
                    <Option imageUrl={tagIcon} heading={"Friend purchases any course"} subHeading={"Using your REFERRAL CODE in the payments page"} />                
                    <Option imageUrl={discountIcon} heading={"Your Friend gets ₹ 200 Off"} subHeading={"On his overall fee on successful purchase using your referral code"} />                
                </VStack>
            </Box>
            <Text fontSize="17px" color="#800080" fontWeight={500}>Friends Who Enrolled</Text>
            <Text fontSize="17px" color="#800080" fontWeight={500}>Terms & Conditions</Text>
        </Box>
    )
}

export default Body