/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { graphql, PageProps } from 'gatsby';
import Helmet from 'react-helmet';

import {
  Header,
  Container,
  Portfolio,
  Development,
  Talks,
  Dribbble
} from '../components';

import { Box } from '@design-system/box';
import { useTheme } from '@design-system/theme';
import { Heading } from '@design-system/typography';
import { Divider } from '@design-system/divider';
import { Stack } from '@design-system/stack';
import { TextLink } from '@design-system/textlink';

const Hero = () => {
  const { colors } = useTheme();
  return (
    <div
      css={{
        padding: '128px 0px',
        backgroundColor: colors.background.emphasis,
        borderBottom: `1px solid ${colors.global.border}`,
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
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'left'
        }}
      >
        <Helmet>
          <meta
            name="description"
            content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
          />
        </Helmet>
        <Stack gap="medium" css={{ maxWidth: 800 }}>
          <Avatar />
          <Heading level={1}>G'day, I'm Nath 👋</Heading>

          <Box as="p">
            I'm a UI Designer &amp; Developer at{' '}
            <TextLink href="https://thinkmill.com.au">Thinkmill</TextLink> in
            Sydney, Australia. I'm passionate about Design Systems, and building
            products from concept to delivery.
          </Box>
        </Stack>
      </div>
    </div>
  );
};

const Avatar = () => {
  const { colors } = useTheme();
  return (
    <img
      src="https://files.nathansimpson.design/avatar.jpeg"
      css={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.text.default
      }}
    />
  );
};

const App = ({ data }: PageProps) => (
  <Fragment>
    <Header hasDivider={false} />
    <Hero />

    <Container>
      <Stack gap="xxxlarge" marginY="xxxlarge" align="center">
        <Portfolio data={data} />

        <Divider />

        <Development />

        <Divider />

        <Dribbble />

        <Divider />

        <Talks data={data} />
      </Stack>
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
            desc
          }
        }
      }
    }
  }
`;

export default App;
