import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({id, name, img, symbol, price, currencySymbol="₹"})=>{
  return (

        <Link to={`/coin/${id}`}>
        
        <VStack
        w={'52'}
        shadow={'lg'}
        m={'4'}
        p={'8'}
        borderRadius={'lg'}
        transition={'all 0.3s'}
        css={{
          "&:hover" : {
            transform: "scale(1.1)"
          }
        }}>
          <Image 
          src={img}
          w={'10'}
          h={'10'}
          objectFit={'contain'}
          alt={name} />
        
        <Heading size={'md'} noOfLines={'1'}>
          {symbol}
        </Heading>
        
        <Text noOfLines={'1'}>{name}</Text>
        <Text noOfLines={'1'}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
        </VStack>
        
        </Link>
        )
}

export default CoinCard
