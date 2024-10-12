"use client";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { CardWrapper } from "./card-wrapper";

const NewVerificationForm = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("skyblue");
  return (
    <CardWrapper
      headerLabel="Confirm your email account"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center justify-center">
        <ClipLoader color={color} loading={loading} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
