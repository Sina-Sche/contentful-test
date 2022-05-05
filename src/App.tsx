import { useEffect, useState } from "react";
import { client } from "./client";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import {
  AppContainer,
  GlobalStyle,
  Header,
  Image,
  RecipeInfo,
  RecipeTitle,
  RecipeTitleContainer,
} from "./AppStyles";

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header>Tagesrezept</Header>
        {data && (
          <>
            <Image
              src={data.image.fields.file.url}
              alt={data.image.fields.description}
            />
            <RecipeTitleContainer>
              <RecipeTitle>{data.headline}</RecipeTitle>
              <RecipeInfo>
                <p>⏰ {data.duration} Min. </p>
                <p>{data.veggie ? "🌱" : ""}</p>
              </RecipeInfo>
            </RecipeTitleContainer>
          </>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
