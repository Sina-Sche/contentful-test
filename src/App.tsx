import React, { useEffect, useState } from "react";
import { client } from "./client";

function App() {
  const [data, setData] = useState<any>();
  const entryId = process.env.REACT_APP_ENTRY_ID;
  useEffect(() => {
    if (entryId) {
      client
        .getEntry(entryId)
        .then((response) => {
          setData(response.fields);
        })
        .catch((e) => console.error(e));
    }
  }, [entryId]);
  data &&
    console.log("Description", data.description.content[0].content[0].value);
  return (
    <div className="App">
      <h1>Contentful Test</h1>
      {data && (
        <>
          <img
            src={data.image.fields.file.url}
            alt={data.image.fields.description}
          />
          <span>{data.headline}</span>
          <section>{data.description.content[0].content[0].value}</section>
          <section>{data.recipe}</section>
        </>
      )}
    </div>
  );
}

export default App;
