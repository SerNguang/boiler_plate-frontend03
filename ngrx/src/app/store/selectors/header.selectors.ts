import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectisAdmin, selectIsLoggedIn } from './auth.selectors';

/********************************************************************************* */
/****RETURN Header View Model */
/********************************************************************************* */

export interface HeaderViewModel {
  isAdmin: boolean;
  isLoggedin: boolean;
}

export const selectHeaderViewModel = createSelector(
  selectisAdmin,
  selectIsLoggedIn,
  (isAdmin: boolean, isLoggedIn: boolean): HeaderViewModel => {
    return {
      isAdmin: isAdmin,
      isLoggedin: isLoggedIn,
    };
  }
);
