import axios from "axios";
import { BASE_URL } from "../../utils/url";
import getUserFromStorage from "../../utils/getUserFromStorage";

export const addCategoryAPI = async ({ type, name }) => {
  const token = getUserFromStorage();
  const response = await axios.post(
    `${BASE_URL}/categories/create`,
    {
      type,
      name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getCategoryByIdAPI = async (id) => {
  const token = getUserFromStorage();
  const response = await axios.get(`${BASE_URL}/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const listCategoriesAPI = async () => {
  const token = getUserFromStorage();
  const response = await axios.get(`${BASE_URL}/categories/list`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateCategoryAPI = async ({ type, name, id }) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${BASE_URL}/categories/update/${id}`,
    {
      type,
      name,
      id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteCategoryAPI = async (id) => {
  const token = getUserFromStorage();
  const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
