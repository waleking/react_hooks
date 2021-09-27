import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [email, setEmail] = useState("");

  //TODO, when the hook useEffect is called?
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => {
        console.log(data);
        setEmail(data[0].email);
      });
  }, []);

  return (
    <div>
      useEffect
      <p>The data are fetced from jsonplaceholder.typicode.com/comments</p>
      <p>{email}</p>
    </div>
  );
};

export default EffectTutorial;
