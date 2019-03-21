import Layout from '../components/Layout';
import Register from '../components/Register';

const Index = (props) => (
  <Layout>
    <Register/>
  </Layout>
);

Index.getInitialProps = async function() {
  return {
      data: {}
  }
}

export default Index;