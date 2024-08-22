import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../main'
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react'

import Loader from '../components/Loader'
import ErrorComponents from './ErrorComponents'
function Exchanges() {

  const [exchanges, setExchanges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    const fetchExchanges = async ()=>{

      try {
        const { data } = await axios.get(`${server}/exchanges`)
        setExchanges(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchExchanges();
  }, [])

  if(error) return <ErrorComponents />

  return (
    <Container maxW={"container.xl"} bgColor={'#F8F7F4'}>
      {loading ? <Loader /> : <>
      
      <HStack wrap={'wrap'} justifyContent={'center'}>
        {exchanges.map((coin)=>(
          <ExchnageCard key={coin.id} name={coin.name} img={coin.image} rank={coin.trust_score_rank} url={coin.url} />
        ))}
      </HStack>

      </>}
    </Container>
  )
}

const ExchnageCard = ({name, img, rank, url})=>(
<a href={url} target={'blank'}>

<VStack 
w={'52'}
shadow={'xl'}
m={'4'}
p={'8'}
color={'black'}
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
  {rank}
</Heading>

<Text color={'black'} noOfLines={'1'}>{name}</Text>
</VStack>

</a>
)

export default Exchanges
