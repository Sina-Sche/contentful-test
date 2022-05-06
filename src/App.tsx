import { useEffect, useState } from "react";
import { client } from "./client";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import { AppContainer, GlobalStyle, Header } from "./AppStyles";
import { Recipe } from "./components/Recipe";

function App() {
  const [recipes, setRecipes] = useState<any>();
  useEffect(() => {
    client
      .getEntries({
        content_type: "recipe",
        select: "sys.id,fields",
      })
      .then((response) => setRecipes(response.items))
      .catch((e) => console.error(e));
  }, []);

  const getRecipeData = (recipes: any) => {
    if (recipes) {
      return recipes.map((recipe: any) => recipe.fields);
    }
  };
  const recipeData = getRecipeData(recipes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header>Tagesrezept</Header>

        {recipes && recipeData && (
          <div>
            {recipeData.map((recipe: any) => {
              return <Recipe {...recipe} />;
            })}
          </div>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
