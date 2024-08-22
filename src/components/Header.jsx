import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} gap={'5'} w={'full'} zIndex={'10'} position={'sticky'} top={'0'} bgColor={"blackAlpha.800"}>
      <Button 
      css={{
        "&:hover":{
          scale: '1.1',
          color: 'white'
        }
      }}
      variant={"unstyled"} color={"#E2E2E2"}>
        <Link to="/">Home</Link>
      </Button>
      <Button 
      css={{
        "&:hover":{
          scale: '1.1',
          color: 'white'
        }
      }}
      variant={"unstyled"} color={"#E2E2E2"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button 
      css={{
        "&:hover":{
          scale: '1.1',
          color: 'white'
        }
      }}
      variant={"unstyled"} color={"#E2E2E2"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;