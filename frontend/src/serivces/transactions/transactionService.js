import axios from "axios";
import getUserFromStorage from "../../utils/getUserFromStorage";
import { BASE_URL } from "../../utils/url";

export const addTransactionAPI = async ({
  amount,
  type,
  category,
  date,
  description,
}) => {
  const token = getUserFromStorage();
  const response = await axios.post(
    `${BASE_URL}/api/transactions/create`,
    {
      amount,
      type,
      category,
      date,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const listTransactionsAPI = async ({category, type, startDate, endDate}) => {
  const token = getUserFromStorage();
  const response = await axios.get(`${BASE_URL}/api/transactions/list`, {
    params:{
        category,
        type,
        startDate,
        endDate
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateTransactionAPI = async (id, name, type) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${BASE_URL}/api/transactions/update/${id}`,
    {
        id,
        name,
        type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

export const deleteTransactionAPI = async (id) => {
  const token = getUserFromStorage();
  const response = await axios.delete(`${BASE_URL}/api/transactions/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}