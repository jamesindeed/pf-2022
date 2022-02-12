import { Layout } from '../components';
// Style Imports
import '../styles/globals.scss';
import '../styles/customCursor.scss';
import '../styles/featured.scss';
import '../styles/gallery.scss';
import '../styles/projects.scss';
import '../styles/loader.scss';
import '../styles/mobileMessage.scss';
// Locomotive
import 'locomotive-scroll/src/locomotive-scroll.scss';
// Tailwind
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
