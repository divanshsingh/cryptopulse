import { Box, Spinner, VStack, Text } from '@chakra-ui/react'
import React from 'react'

function Loader() {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
      <Box transform={'scale(3)'}>
      <Spinner size={'xl'} />
      </Box>
      <Text marginTop={'14'}>Laoding...</Text>
    </VStack>
  )
}

export default Loader
