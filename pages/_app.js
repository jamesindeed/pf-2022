import { Layout } from '../components';
// * Style Imports
import '../styles/globals.scss';
import '../styles/customCursor.scss';
import '../styles/featured.scss';
import '../styles/gallery.scss';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
