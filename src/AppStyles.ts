import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  padding: 0 ;
  margin: 0;
}`;

export const AppContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;
export const Header = styled.h1`
  background-color: ${(props) => props.theme.colors.primary};
  height: 56px;
  padding: 15px 15px;
  margin: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const Image = styled.img`
  max-width: 100vw;
  height: 100vh;
`;

export const RecipeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.dark};
  width: 100vw;
  height: 25vh;
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontsize.large}px;
  padding: 15px;
`;

export const RecipeTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.recipe};
`;

export const RecipeInfo = styled.div`
  display: flex;
  > p:first-child {
    margin-right: 180px;
  }
`;
