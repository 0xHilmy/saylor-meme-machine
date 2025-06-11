// This page is no longer used as we have implemented Home.tsx
// Keeping for backward compatibility

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};

export default Index;
