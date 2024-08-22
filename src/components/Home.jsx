import { Box, HStack, Image, Text } from '@chakra-ui/react'
import cryptoPulseLogo from '../assets/btc.png'
import { motion } from 'framer-motion'
import React from 'react'
function Home() {
  return (
    <Box w={'full'} bgColor={'#F8F7F4'} h={'100vh'}>
      <motion.div style={{
        paddingTop: "15vh",
        height: "80vh",
      }}
      animate={{
        translateY: "25px"
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }}
      >
      <Image margin={'auto'} w={'90%'} h={'90%'} objectFit={'contain'} src={cryptoPulseLogo} filter={'grayScale(1)'} />
      </motion.div>
      <HStack justifyContent="center" alignItems="center" marginTop={'-50'}>
        <Text fontSize={'6xl'} fontWeight={'thin'} color={'black'}>
          Crypt
        </Text>
        <Image
        marginLeft={'-10px'}
        marginTop={'10px'}
          src={cryptoPulseLogo}
          alt="crypto"
          w={'40px'}
          h={'40px'}
          filter={'grayScale(1)'}
          objectFit={'contain'}
        />
        <Text fontSize={'6xl'} fontWeight={'thin'} color={'black'}>
          Pulse
        </Text>
      </HStack>
    </Box> 

  )
}

export default Home
