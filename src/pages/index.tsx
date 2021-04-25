/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { graphql, PageProps } from 'gatsby';
import Helmet from 'react-helmet';

import {
  Container,
  Portfolio,
  Development,
  Talks,
  Dribbble,
  Layout
} from '../components';
import { Logo } from '../../design-system/logo';

import { Box } from '../../design-system/box';
import { Cluster } from '../../design-system/cluster';
import { colors } from '../../design-system/theme';
import { Heading } from '../../design-system/typography';
import { Divider } from '../../design-system/divider';
import { Stack } from '../../design-system/stack';
import { TextLink, TextLinkGatsby } from '../../design-system/textlink';

const Hero = () => {
  return (
    <div
      css={{
        padding: '128px 0px',
        backgroundColor: colors.backgroundEmphasis,
        borderBottom: `1px solid ${colors.border}`,
        width: '100%'
      }}
    >
      <div
        css={{
          maxWidth: '1300px',
          padding: '0 24px',
          margin: '0 auto',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <Helmet>
          <meta
            name="description"
            content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
          />
        </Helmet>
        <Stack gap="medium" align="center">
          <Logo size="medium" />
          <Heading level={1}>G'day, I'm Nath.</Heading>

          <Box as="p">
            I'm a UI Designer &amp; Developer at{' '}
            <TextLink href="https://thinkmill.com.au">Thinkmill</TextLink> in
            Sydney, Australia. I'm passionate about Design Systems, and building
            products from concept to delivery.
          </Box>

          <Cluster gap="large">
            <TextLinkGatsby to="/about">About</TextLinkGatsby>
            <TextLinkGatsby to="/blog">Blog</TextLinkGatsby>
          </Cluster>
        </Stack>
      </div>
    </div>
  );
};

const App = ({ data }: PageProps) => (
  <Fragment>
    <Hero />

    <Container>
      <Layout>
        <Stack gap="xxxlarge" marginY="xxxlarge" align="center">
          <Portfolio data={data} />

          <Divider />

          <Development />

          <Divider />

          <Dribbble />

          <Divider />

          <Stack gap="small" align="center">
            <Heading level={2}>Talks</Heading>
            <Talks data={data} />
          </Stack>
        </Stack>
      </Layout>
    </Container>
  </Fragment>
);

export const portfolioQuery = graphql`
  query IndexProjects {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          body
          frontmatter {
            path
            title
            imagesrc
            type
            youtubeid
            tag
          }
        }
      }
    }
  }
`;

export default App;