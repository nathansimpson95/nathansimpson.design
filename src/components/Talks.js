/** @jsx jsx */
import { jsx } from '@emotion/core';

import { borderRadius, colors, fontsizes, spacing } from '../theme';
import { mq } from '../helpers/utils';

export const Talks = ({ data }) => (
  <div>
    <p>
      Occasionally I give talks at{' '}
      <a href="https://www.sydjs.com/" target="_blank">
        SydJS
      </a>
      {' and '}
      <a href="https://www.meetup.com/en-AU/React-Sydney/" target="_blank">
        React Sydney
      </a>{' '}
      meetups. Check out the recordings below, and come and say hi at the next
      one!
    </p>
    {data.allMarkdownRemark.edges
      .filter(({ node }) => node.frontmatter.type === 'talk')
      .map(({ node }) => (
        <Talk node={node} key={node.id} />
      ))}
  </div>
);

const Talk = ({ node }) => {
  const defaultBorder = `1px solid ${colors.slate['50']}`;

  return (
    <div
      css={mq({
        backgroundColor: colors.slate['30'],
        border: defaultBorder,
        borderLeft: [defaultBorder, `2px solid ${colors.orange}`],
        borderTop: [`2px solid ${colors.orange}`, defaultBorder],
        borderBottomRightRadius: borderRadius.lg,
        borderTopRightRadius: [0, borderRadius.lg],
        borderBottomLeftRadius: [borderRadius.lg, 0],
        display: 'flex',
        flexDirection: ['column', 'row'],
        marginBottom: spacing.large,
        maxWidth: 800
      })}
    >
      <a
        href={node.frontmatter.path}
        css={mq({
          width: ['auto', 220],
          height: [160, 'auto'],
          backgroundColor: colors.slate['40'],
          backgroundImage: `url(https://i.ytimg.com/vi/${node.frontmatter.youtubeid}/hqdefault.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        })}
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: spacing.large
        }}
      >
        <h3
          css={{
            margin: 0,
            fontSize: fontsizes.xlarge
          }}
        >
          {node.frontmatter.title}
        </h3>
        <p
          css={{
            marginTop: spacing.small,
            marginBottom: spacing.none,
            fontSize: fontsizes.small
          }}
        >
          {node.html.replace(/<\/?p>/g, '').slice(0, 148)}
          {'... '}
          <a href={node.frontmatter.path}>Watch now</a>{' '}
        </p>
      </div>
    </div>
  );
};
