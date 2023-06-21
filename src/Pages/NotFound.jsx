import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const home = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      home("/");
    }, 1000);
  });
  return <h1>Not Found</h1>;
}
