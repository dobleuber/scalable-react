import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';
import selectLoginContainer from '../LoginContainer/selectors';
/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */
const selectRouteTopic = () => (state, props) =>
  props.params.topicName;

const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => {
    const selectedTopic = navigationState.topics.find(t => t.name === routeTopicName);
    return selectedTopic || {
      name: '',
    };
  }
);

/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectLoginContainer(),
  selectTopic(),
  (substate, loginSubState, topic) =>
    Object.assign(substate.toJS(), loginSubState, { topicName: topic.name })
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
