/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  VOTE_LINK_SUCCESS,
} from './constants';

import {
  ADD_LINK_SUCCESS,
} from '../LinkFormContainer/constants';

const initialState = fromJS({
  links: [],
});

function addLink(state, link) {
  const links = state.get('links');
  links.push(link);
  return state.set('links', links);
}

function updateLinks(state, link) {
  const links = state.get('links');
  const newLinks = links.map(l => (l.id === link.id ? link : l));
  return state.set('links', newLinks);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEEDED:
      return state.set('links', action.links);
    case ADD_LINK_SUCCESS:
      return addLink(state, action.link);
    case VOTE_LINK_SUCCESS:
      return updateLinks(state, action.link);
    default:
      return state;
  }
}

export default linkListContainerReducer;
