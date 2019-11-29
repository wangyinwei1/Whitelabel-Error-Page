const USER_INFO = 'user_info';

export default {
  isLogin: () => {
    console.log(localStorage.getItem(USER_INFO));
    return localStorage.getItem(USER_INFO);
  },

  saveUserInfo: user => {
    localStorage.setItem(USER_INFO, JSON.stringify(user));
  },

  getUserInfo: () => {
    try {
      return JSON.parse(localStorage.getItem(USER_INFO));
    } catch (error) {
      console.log(error);
    }

    return null;
  },

  logout: () => {
    localStorage.removeItem(USER_INFO);
  },
};
