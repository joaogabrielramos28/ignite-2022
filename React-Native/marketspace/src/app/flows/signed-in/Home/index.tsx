import React from "react";
import { HomeLayout } from "./layout";
import { useAuth } from "@hooks/network/useAuth";

export const Home = () => {
  const { user } = useAuth();
  return <HomeLayout user={user} />;
};
