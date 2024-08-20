import React from 'react';
import Routes from './Routes';
import useUserStore from './store/UserStore';
import useAuthStore from './store/AuthStore';

function App() {
  const { accessToken } = useAuthStore();

  // 멤버 api 조회 parameter 얻은 후 작업 예정
  if (accessToken) {
    const user = useUserStore.getState();
    console.log(user);
    if (!user.id) {
      // const response = await axiosInstance.post(`/members/${seq}`, params, {
      //   headers: {
      //     'certificated-token': accessToken,
      //   },
      // });
    }
  }

  return <Routes />;
}

export default App;
