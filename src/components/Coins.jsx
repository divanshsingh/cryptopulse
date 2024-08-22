import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../main'
import { Container, HStack, VStack, Image, Heading, Text, Button, RadioGroup, Radio } from '@chakra-ui/react'
import CoinCard from './CoinCard'

import Loader from '../components/Loader'
import ErrorComponents from './ErrorComponents'
function Coins() {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState("inr")
  const [page, setPage] = useState(1)

  const changePage = (page)=>{
    setPage(page);
    setLoading(true)
}

const btns = new Array(132).fill(1)

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  useEffect(()=>{
    const fetchExchanges = async ()=>{

      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchExchanges();
  }, [currency, page])

  if(error) return <ErrorComponents />

  return (
    <Container maxW={"container.xl"} bgColor={'#F8F7F4'}>
      {loading ? <Loader /> : <>

      <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
        <HStack color={'black'} spacing={'4'}>
          <Radio value='inr'>INR</Radio>
          <Radio value='usd'>USD</Radio>
          <Radio value='eur'>EUR</Radio>
        </HStack>
      </RadioGroup>
      
      <HStack color={'black'} wrap={'wrap'} justifyContent={'space-evenly'}>
        {coins.map((coin)=>(
          <CoinCard
          id={coin.id}
          key={coin.id} 
          name={coin.name} 
          img={coin.image} 
          symbol={coin.symbol} 
          price={coin.current_price}
          currencySymbol={currencySymbol} />
        ))}
      </HStack>

      <HStack w={'full'} overflowX={'hidden'} p={'8'}>
        {btns.map((item, index) => {
          return <Button 
          key={index} 
          bg={'blackAlpha.900'}
          color={'white'}
          onClick={()=>changePage(index + 1)}
          > 
            {index + 1}
            </Button>
        })}
      </HStack>

      </>}
  
    </Container>
  )
}

export default Coins
