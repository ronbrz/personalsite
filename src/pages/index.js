import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import IndexHeader from '../components/indexHeader';
import Bio from '../components/Bio';
import Contact from '../components/contact';

const IndexPage = () =>
      <Layout>
        <SEO title="Home" />
        <IndexHeader/>
        <Bio/>
        <Contact />
      </Layout>;



export default IndexPage;
