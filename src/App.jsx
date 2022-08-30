import React, { useEffect, useState } from "react";
import "./App.css";
import { NewRecipe } from "./Components/NewRecipe/NewRecipe";
import { RECIPES } from "./data";
import { RecipesFilter } from "./Components/RecipesFilter/RecipesFilter";
import { RecipesList } from "./Components/RecipesList/RecipesList";
import { Wrapper } from "./Components/Wrapper/Wrapper";
import { Paginator } from './Components/Paginator/Paginator';

function App() {
  const [allRecipes, setAllRecipes] = useState(RECIPES);
  const [filteredRecipes, setFilteredRecipes] = useState(RECIPES);
  const [selectedPage, setSelectedPage] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [recipeEdit, setRecipeEdit] = useState({});
  const filterRecipes = (inputValue) => {
    setFilteredRecipes(
      allRecipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(inputValue.toLowerCase());
      })
    );
    paginate(1);
  };
  const removeElement = (id) => {
    // let indexCake = allRecipes.findIndex((element) => element.id === id);
    // allRecipes.splice(indexCake, 1);
    const newArray = allRecipes.filter((recipe) => recipe.id !== id);
    setAllRecipes(newArray);
  };

  const addRecipeHandler = (recipe) => {
    setAllRecipes((prevRec) => {
      return [...prevRec, recipe];
    });
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
    setIsAdding(false);
    setIsEditing(true);
    allRecipes.forEach((element) => {
      if (element.id === elementId) {
        setRecipeEdit(element);
      }
    });
  };

  const saveEditingData = (recipe) => {
    let newRecipes = allRecipes.map((rec) => {
      if (rec.id === recipe.id) {
        return recipe;
      }
      return rec;
    });
    setAllRecipes(newRecipes);
  };

  useEffect(() => {
    paginate();
  }, [filteredRecipes, allRecipes, selectedPage]);

  useEffect(() => {
    setFilteredRecipes(allRecipes);
  }, [allRecipes]);
  return (
    <Wrapper>
      <h2>Recipes Overview</h2>
      <RecipesFilter onChange={filterRecipes} />
      <NewRecipe
        setIsAdding={setIsAdding}
        isAdding={isAdding}
        setIsEditing={setIsEditing}
        recipes={allRecipes}
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
      <Paginator
        setSelectedPage={setSelectedPage}
        changePage={paginate}
        number={number}
      />
    </Wrapper>
  );
}

export default App;
