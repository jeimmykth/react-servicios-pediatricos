import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Bienvenidos a Servicios Pediatricos</h1>
      <img src="http://bricammedical.com/wp-content/uploads/ADC/estetoscopio-pediatria-618-verde-adimals.jpg"></img>
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