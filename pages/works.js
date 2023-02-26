import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbInkdrop from '../public/images/works/cat.webp'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="inkdrop" title="inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="inkdrop" title="inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
