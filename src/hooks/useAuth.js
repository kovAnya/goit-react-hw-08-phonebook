export const useAuth = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const user = useSelector(selectUser);

  const isLoggedIn = true;
  const isRefreshing = false;
  //   const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    // user,
  };
};
