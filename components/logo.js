import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/racoon.png`
  return (
    <Link href="/">
      <LogoBox>
        <Image src={footPrintImg} width={28} height={28} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          m={3}
        >
          Marc-Antoine Hovington
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
