import { authCtrl } from "@/api";

export async function authFetcher(url, params) {
  const token = await authCtrl.retriveSession();
  console.log(token);

  const logout = () => {
    authCtrl.logout();
    window.location.replace("/");
  };

  if (!token) {
    logout();
  } else {
    const paramsTemp = {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: token,
      },
    };
    try {
      return await fetch(url, paramsTemp);
    } catch (error) {
      throw error;
    }
  }
}
