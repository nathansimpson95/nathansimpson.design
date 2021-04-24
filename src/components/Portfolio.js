/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Heading } from '../../design-system/typography';
import { ContentCard } from '../../design-system/contentcard';
import { Tiles } from '../../design-system/tiles';
import { spacing } from '../../design-system/theme';

export const Portfolio = ({ data }) => (
  <div css={{ width: '100%' }}>
    <Heading level={3} css={{ marginBottom: spacing.large }}>
      Projects
    </Heading>
    <Tiles>
      {data.allMdx.edges
        .filter(({ node }) => node.frontmatter.type === 'project')
        .map(({ node }) => {
          const meta = node.frontmatter;

          return (
            <ContentCard
              key={node.id}
              project={meta}
              tag={meta.tag}
              path={meta.path}
              image={
                meta.imagesrc &&
                'https://files.nathansimpson.design/portfolio/' + meta.imagesrc
              }
              title={meta.title}
            />
          );
        })}
    </Tiles>
  </div>
);
