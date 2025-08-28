import axios from "axios";
import { BASE_URL } from "../../utils/url";
import getUserFromStorage from "../../utils/getUserFromStorage";


export const loginApi = async ({ email, password }) => {
  const res = await axios.post(`${BASE_URL}/api/users/login`, { email, password });
  //   if (res.data) {
  //     localStorage.setItem("user", JSON.stringify(res.data));
  //   }
  return res.data;
};

export const registerApi = async ({ username, email, password }) => {
  const res = await axios.post(`${BASE_URL}/api/users/register`, {
    username,
    email,
    password,
  });
  //   if (res.data) {
  //     localStorage.setItem("user", JSON.stringify(res.data));
  //   }
  return res.data;
};

export const logoutApi = () => {
  localStorage.removeItem("user");
};

export const getUserProfileApi = async () => {
  const token = getUserFromStorage();
  const res = await axios.get(`${BASE_URL}/api/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateUserProfileApi = async ({ username, email }) => {
  const token = getUserFromStorage();
  const res = await axios.put(
    `${BASE_URL}/api/users/update-profile`,
    {
      username,
      email,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const changePasswordApi = async ({currentPassword, newPassword}) => {
  
  const token = getUserFromStorage()

  const res = await axios.put(
    `${BASE_URL}/api/users/change-password`,
    {
      currentPassword,
      newPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
