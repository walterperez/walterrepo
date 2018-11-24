//action types
export const CLICK_POST = 'CLICK_POST';

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_MENU: 'SHOW_MENU',
  CLOSE_MENU: 'CLOSE_MENU'
}

//action creators
 export function clickPost (name) {
  return {
    type: 'CLICK_POST',
    name
  }
}

 export function closeMenu () {
  return {
    type: VisibilityFilters.CLOSE_MENU
  }
}

 export function openMenu () {
  return {
    type: VisibilityFilters.SHOW_MENU
  }
}