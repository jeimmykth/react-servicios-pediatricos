import Layout from '../components/Layout';
import Login from '../components/Login';

const Index = (props) => (
  <Layout>
    <Login/>
  </Layout>
);

Index.getInitialProps = async function() {
  return {
      data: {}
  }
}

export default Index;