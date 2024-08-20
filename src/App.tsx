import React from 'react';
import Routes from './Routes';
import useUserStore from './store/UserStore';
import useAuthStore from './store/AuthStore';

function App() {
  const { accessToken } = useAuthStore();
  const { id, email, nickname, joinType } = useUserStore.getState();
  const user = id ? { id, email, nickname, joinType } : null;

  // 멤버 api 조회 parameter 얻은 후 작업 예정
  if (accessToken) {
    console.log(user);
    if (!user) {
      // const response = await axiosInstance.post(`/members/${seq}`, params, {
      //   headers: {
      //     'certificated-token': accessToken,
      //   },
      // });
    }
  }

  return <Routes user={user} />;
}

export default App;
