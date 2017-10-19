/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
  REQUEST_LINKS,
  START_ADD,
  VOTE_LINK,
  VOTE_LINK_SUCCESS,
  VOTE_LINK_FAILED,
} from './constants';

export function startAdd(topicName) {
  return {
    type: START_ADD,
    topicName,
  };
}

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName,
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}

export function voteLink(id, email) {
  return {
    type: VOTE_LINK,
    id,
    email,
  };
}

export function voteLinkSuccess(link) {
  return {
    type: VOTE_LINK_SUCCESS,
    link,
  };
}

export function voteLinkFailed(message) {
  return {
    type: VOTE_LINK_FAILED,
    message,
  };
}
