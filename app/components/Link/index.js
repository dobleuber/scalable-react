/**
*
* Link
*
*/

import React from 'react';
import IconButton from '../IconButton';

import styles from './styles.css';

function Link({ link, email, voteLink }) {
  const hasVoted = link.voters.indexOf(email) > -1;
  return (
    <div className={styles.link}>
      <div
        className={styles.votingContainer}
      >
        <div
          className={styles.votingCount}
        >
          {link.voteCount}
        </div>
      </div>
      <div
        className={styles.detailsContainer}
      >
        <div>
          <a
            href={link.url}
            className={styles.linkAnchor}
          >
            {link.url}
          </a>
        </div>
        <div
          className={styles.description}
        >
          {link.description}
        </div>
      </div>
      <div
        className={styles.actionsContainer}
      >
        {
          email ?
            <IconButton
              icon={hasVoted ? 'heart' : 'heart-o'}
              onClick={() => !hasVoted && voteLink(link.id, email)}
            /> : null
        }
      </div>
    </div>
  );
}

Link.propTypes = {
  link: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    voteCount: React.PropTypes.number.isRequired,
  }),
  voteLink: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default Link;
