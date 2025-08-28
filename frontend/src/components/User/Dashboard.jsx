import React from "react";
import TransactionList from "../Transaction/TransactionsList";
import TransactionChart from "../Transaction/TransactionChart";

const Dashboard = () => {
  return (
    <>
      <TransactionChart />
      <TransactionList />
    </>
  );
};

export default Dashboard;