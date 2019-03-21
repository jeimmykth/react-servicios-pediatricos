import Layout from '../components/Layout';


const Index = (props) => (
  <Layout>
    <div>
      <h1>Bienvenidos a Servicios Pediatricos</h1>
      <p>Busca Servicios Disponibles</p> 
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  return {
      data: {}
  }
}

export default Index;