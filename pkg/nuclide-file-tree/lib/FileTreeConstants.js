

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

exports.ActionType = Object.freeze({
  COLLAPSE_NODE: 'COLLAPSE_NODE',
  COLLAPSE_NODE_DEEP: 'COLLAPSE_NODE_DEEP',
  DELETE_SELECTED_NODES: 'DELETE_SELECTED_NODES',
  EXPAND_NODE: 'EXPAND_NODE',
  SET_EXCLUDE_VCS_IGNORED_PATHS: 'SET_EXCLUDE_VCS_IGNORED_PATHS',
  EXPAND_NODE_DEEP: 'EXPAND_NODE_DEEP',
  SET_CWD: 'SET_CWD',
  SET_HIDE_IGNORED_NAMES: 'SET_HIDE_IGNORED_NAMES',
  SET_IGNORED_NAMES: 'SET_IGNORED_NAMES',
  SET_ROOT_KEYS: 'SET_ROOT_KEYS',
  SET_TRACKED_NODE: 'SET_TRACKED_NODE',
  MOVE_TO_NODE: 'MOVE_TO_NODE',
  SET_DROP_TARGET_NODE: 'SET_DROP_TARGET_NODE',
  SET_USE_PREVIEW_TABS: 'SET_USE_PREVIEW_TABS',
  SET_USE_PREFIX_NAV: 'SET_USE_PREFIX_NAV',
  SET_VCS_STATUSES: 'SET_VCS_STATUSES', // VCS = version control system
  SET_REPOSITORIES: 'SET_REPOSITORIES',
  SET_WORKING_SET: 'SET_WORKING_SET',
  SET_OPEN_FILES_WORKING_SET: 'SET_OPEN_FILES_WORKING_SET',
  SET_WORKING_SETS_STORE: 'SET_WORKING_SETS_STORE',
  START_EDITING_WORKING_SET: 'START_EDITING_WORKING_SET',
  FINISH_EDITING_WORKING_SET: 'FINISH_EDITING_WORKING_SET',
  CHECK_NODE: 'CHECK_NODE',
  UNCHECK_NODE: 'UNCHECK_NODE',
  SET_DRAG_HOVERED_NODE: 'SET_DRAG_HOVERED_NODE',
  UNHOVER_NODE: 'UNHOVER_NODE',
  SET_SELECTED_NODE: 'SET_SELECTED_NODE',
  SET_FOCUSED_NODE: 'SET_FOCUSED_NODE',
  ADD_SELECTED_NODE: 'ADD_SELECTED_NODE',
  UNSELECT_NODE: 'UNSELECT_NODE',
  MOVE_SELECTION_UP: 'MOVE_SELECTION_UP',
  MOVE_SELECTION_DOWN: 'MOVE_SELECTION_DOWN',
  MOVE_SELECTION_TO_TOP: 'MOVE_SELECTION_TO_TOP',
  MOVE_SELECTION_TO_BOTTOM: 'MOVE_SELECTION_TO_BOTTOM',
  ENSURE_CHILD_NODE: 'ENSURE_CHILD_NODE',
  CLEAR_FILTER: 'CLEAR_FILTER',
  SET_OPEN_FILES_EXPANDED: 'SET_OPEN_FILES_EXPANDED'
});

exports.EVENT_HANDLER_SELECTOR = '.nuclide-file-tree';