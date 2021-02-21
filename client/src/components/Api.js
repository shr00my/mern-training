import React, { useEffect, useState } from "react";

const Api = () => {
  const [api, setApi] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setApi(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      Fetched data: <code>{api}</code>
    </div>
  );
};

export default Api;
