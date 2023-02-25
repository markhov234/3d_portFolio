import { Container,Box,Heading } from "@chakra-ui/react"
const Page = () => {
    return <Container>
        <Box borderRadius="lg" bg="red" p="3" mb="6" align="center">
            Hello, There is the presentation of the drGilette Bot
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
                Marc-Antoine Hovington
            </Heading>
            <p>Ceci est mon portfolio utilisant Next.js et Three.js</p>
            </Box>
        </Box>
         </Container>
}
export default Page