import { Container, Grid, Column } from './styled-component-grid.jsx'

const App = () => (
  <Container>
    <Grid>
      <Column xs={4} md={6} lg={3}>
        <Box />
      </Column>
      <Column xs={4} md={12} lg={6}>
        <Box />
      </Column>
      <Column xs={4} md={6} lg={3}>
        <Box />
      </Column>
    </Grid>
    <Grid>
      <Column xs={4} md={6} lg={3}>
        <Box />
      </Column>
      <Column xs={4} md={12} lg={6}>
        <Grid>
          <Column xs={4} md={6} lg={3}>
            <Box />
          </Column>
          <Column xs={4} md={12} lg={6}>
            <Box />
          </Column>
          <Column xs={4} md={6} lg={3}>
            <Box />
          </Column>
        </Grid>
      </Column>
      <Column xs={4} md={6} lg={3}>
        <Box />
      </Column>
    </Grid>
  </Container>
)

export default App