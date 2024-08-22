import { Avatar, Box, Button, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import avatarSrc from '../assets/aboutme.jpeg'

function Footer() {
  return (
   <Box w={'full'} bgColor={"blackAlpha.800"} color={'whiteAlpha.700'} minH={'55'} px={'16'} py={["16", "8"]} >

<Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
          <HStack flexDirection={["column", "row"]}>
          <Button css={{
            "&:hover":{
              backgroundColor: "lightgray",
              color: "black",               
              textDecoration: "none",
            },
          }} variant={'link'} colorScheme='white'><a href="https://github.com/divanshsingh" target='_blank'>Github</a></Button>
                <Button css={{
            "&:hover":{
              backgroundColor: "lightgray",
              color: "black",               
              textDecoration: "none",
            },
          }} variant={'link'} colorScheme='white'><a href="https://www.linkedin.com/in/divansh-singh-16053b258/" target='_blank'>LinkedIn</a></Button>
                <Button css={{
            "&:hover":{
              backgroundColor: "lightgray",
              color: "black",               
              textDecoration: "none",
            },
          }} variant={'link'} colorScheme='white'><a href="https://x.com/DivanshSin39085" target='_blank'>Twitter</a></Button>
                <Button css={{
            "&:hover":{
              backgroundColor: "lightgray",
              color: "black",               
              textDecoration: "none",
            },
          }} variant={'link'} colorScheme='white'><a href="https://www.instagram.com/divansh_xml/" target='_blank'>Instagram</a></Button>
                </HStack>
        </VStack>
        </Stack>
   </Box>
  )
}



export default Footer
