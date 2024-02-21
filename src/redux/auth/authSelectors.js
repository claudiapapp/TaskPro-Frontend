export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsAuthLoading = state => state.auth.isAuthLoading;
export const selectAuthError = state => state.auth.authError;
export const selectTheme = state => state.auth.user.theme;
