import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { Contact } from "../components/Contact";
import { Core } from "../components/Core";

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <Core />
      <Contact />
    </>
  );
};
