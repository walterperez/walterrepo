//action types
export const CLICK_POST = 'CLICK_POST';

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}//this is just an example

//action creators
 export function clickPost (name) {
  return {
    type: 'CLICK_POST',
    name
  }
}