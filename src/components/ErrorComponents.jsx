import { Alert, Box, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function ErrorComponents() {
  return (
    <Box
      w={'full'} 
      h={'100vh'} 
      bgColor={'#F8F7F4'} 
      color={'black '} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'}
      textAlign={'center'}
      p={4}
    >
      <VStack spacing={4}>
        <Text fontSize={'4xl'} fontWeight={'bold'}>
          Oops! Something Went Wrong
        </Text>
        <Text fontSize={'lg'} maxW={'600px'} letterSpacing={"widest"}>
          It seems that our API has reached its usage limit for the free tier. This occasionally happens due to the high demand. We're sorry for the inconvenience, and we'll be back online shortly. Please try refreshing the page after a few minutes.
        </Text>
        <Button
          colorScheme={'teal'}
          size={'lg'}
          onClick={()=> window.location.reload()}
        >
          Try Again
        </Button>
      </VStack>
    </Box>
  )
}

export default ErrorComponents
