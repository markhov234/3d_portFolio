import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p="3"
          mb="6"
          align="center"
        >
          Hello, There is the presentation of the drGilette Bot
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Marc-Antoine Hovington
            </Heading>
            <p>Ceci est mon portfolio utilisant Next.js et Three.js</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/marc.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            {' '}
            Pararagraph to full the description. Pararagraph to full the
            description. Pararagraph to full the description. Pararagraph to
            full the description. Pararagraph to full the description.
            Pararagraph to full the description.{' '}
            <NextLink href="/works/inkdrop">Inkdrop</NextLink>.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portFolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born to Quebec, Canada.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed my diploma from Cegep de Sainte-Foy
          </BioSection>
          <BioSection>
            <BioYear>2021 to 2022 </BioYear>
            Worked as Front-End Dev for Folks(GoRh)
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
