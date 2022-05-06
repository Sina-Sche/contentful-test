import {
  Image,
  RecipeContainer,
  RecipeInfo,
  RecipeTitle,
  RecipeTitleContainer,
} from "../AppStyles";
import { RecipeProps } from "../AppTypes";

export const Recipe = (data: RecipeProps) => {
  const source = data.image.fields.file.url;
  const alt = data.image.fields.description;
  return (
    <RecipeContainer>
      <Image src={source} alt={alt} />
      <RecipeTitleContainer>
        <RecipeTitle>{data.headline}</RecipeTitle>
        <RecipeInfo>
          <p>⏰ {data.duration} Min. </p>
          <p>{data.veggie ? "🌱" : ""}</p>
        </RecipeInfo>
      </RecipeTitleContainer>
    </RecipeContainer>
  );
};
