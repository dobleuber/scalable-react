// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import {
  requestLinksSucceeded,
  requestLinksFailed,
  voteLinkSuccess,
  voteLinkFailed,
} from './actions';
import { REQUEST_LINKS, START_ADD, VOTE_LINK } from './constants';
import { push } from 'react-router-redux';
import { voteLink } from '../../api';

function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

function* newVote(id, email) {
  try {
    const serverLink = yield call(voteLink, id, email);
    yield put(voteLinkSuccess(serverLink));
  } catch (e) {
    yield put(voteLinkFailed(e.message));
  }
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

function* startAdd(action) {
  yield put(push(`/topics/${action.topicName}/add`));
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd);
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

export function* voteLinkSaga() {
  yield* takeLatest(VOTE_LINK, newVote);
}

// All sagas to be loaded
export default [
  defaultSaga,
  startAddSaga,
  voteLinkSaga,
];
