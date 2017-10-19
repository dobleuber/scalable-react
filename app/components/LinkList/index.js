/**
*
* LinkList
*
*/

import React from 'react';
import Link from '../Link';

import styles from './styles.css';
import IconButton from '../IconButton';

function LinkList({ links, topicName, children, startAdd, voteLink, email }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
      voteLink={voteLink}
      email={email}
    />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
      <IconButton
        icon="plus"
        buttonClass={styles.button}
        iconClass={styles.icon}
        onClick={() => { startAdd(topicName); }}
      />
      {children}
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
  topicName: React.PropTypes.string.isRequired,
  startAdd: React.PropTypes.func.isRequired,
  voteLink: React.PropTypes.func.isRequired,
  children: React.PropTypes.element,
  email: React.PropTypes.string,
};

export default LinkList;
