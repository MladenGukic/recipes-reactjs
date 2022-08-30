import React, { useState } from "react";
import "./App.css";
import { NewRecipe } from "./Components/NewRecipe/NewRecipe";
import { RECIPES } from "./data";
import { Pages } from "./Components/Pages/Pages";
import { RecipesFilter } from "./Components/RecipesFilter/RecipesFilter";
import { RecipesList } from "./Components/RecipesList/RecipesList";
import { Wrapper } from "./Components/Wrapper/Wrapper";

function App() {
  const [filteredRecipes, setFilteredRecipes] = useState(RECIPES);
  const [selectedPage, setSelectedPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [recipeEdit, setRecipeEdit] = useState({});
  const filterRecipes = (inputValue) => {
    console.log(inputValue);
    setFilteredRecipes(
      RECIPES.filter((recipe) => {
        return recipe.title.toLowerCase().includes(inputValue.toLowerCase());
      })
    );
    paginate();
  };
  const removeElement = (id) => {
    console.log(id);
    let indexCake = RECIPES.findIndex((element) => element.id === id);
    RECIPES.splice(indexCake, 1);
    paginate();
  };

  const addRecipeHandler = (recipe) => {
    RECIPES.unshift(recipe);
    paginate();
  };
  const number =
    filteredRecipes.length < 5 ? 1 : Math.ceil(filteredRecipes.length / 5);

  const [paginatedRecipes, setPaginatedRecipes] = useState(
    filteredRecipes.slice((selectedPage - 1) * 5, selectedPage * 5)
  );

  const paginate = (pageNum = selectedPage) => {
    setSelectedPage(pageNum);
    setPaginatedRecipes(filteredRecipes.slice((pageNum - 1) * 5, pageNum * 5));
  };

  const getElement = (elementId) => {
    setIsEditing(true);
    RECIPES.forEach((element) => {
      if (element.id === elementId) {
        setRecipeEdit(element);
      }
    });
  };

  const saveEditingData = (recipe, id) => {
    let index = RECIPES.findIndex((element) => element.id === id);
    RECIPES[index].title = recipe.title;
    RECIPES[index].description = recipe.description;
    paginate();
  };

  return (
    <Wrapper>
      <h2>Recipes Overview</h2>
      <RecipesFilter onChange={filterRecipes} />
      <NewRecipe
        setIsEditing={setIsEditing}
        recipes={RECIPES}
        saveEditingData={saveEditingData}
        recipeEdit={recipeEdit}
        isEditing={isEditing}
        onAddRecipe={addRecipeHandler}
      />
      <RecipesList
        getElement={getElement}
        deleteRecipe={removeElement}
        recipes={paginatedRecipes}
      />
      <Pages
        setSelectedPage={setSelectedPage}
        changePage={paginate}
        number={number}
      />
    </Wrapper>
  );
}

export default App;
