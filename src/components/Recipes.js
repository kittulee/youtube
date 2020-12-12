import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import axios from "axios";
import "./Recipes.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    margin: "30px auto",
    alignItems: "center",
    width: 400,
    border: "solid 1px grey",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 10,
  },
}));
function Recipes() {
  const classes = useStyles();
  const APP_ID = "bd64c806";
  const APP_KEY = "8fef3266e70bad2cbdbccdfddf88301f";
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("lamb");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipe(response.data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div>
      <section className="section1">
        <img src="imgs/recipeheader.jpg" alt="reacipeheader" />
        <div className="centered">
          100 Recipes Recreated From Your Favourite Ingrediants
        </div>
        <div className="sectiondiv">
          <h2>IT'S TIME</h2>
          <p>
            Well, it was bound to happen. With so much food being prepared,
            experimented upon, and (usually) eaten, it was inevitable that one
            fine day, we'd write down some recipes. But we've done that and so
            much more with the first 100 recipes featured in the official
            Süßgewürz Cookbook - take a look behind the scenes, see some goofy
            (and mouthwatering) photos, hear some happy and sad stories, and
            read a touching foreword by the man himself, Jon Favreau.{" "}
          </p>
        </div>
      </section>
      <section className="section2">
        <h1>Stay tuned — more recipes coming soon!</h1>
        <div>
          <Paper
            justify="center"
            component="form"
            onSubmit={updateQuery}
            className={classes.root}
          >
            <InputBase
              type="text"
              value={search}
              onChange={updateSearch}
              className={classes.input}
              placeholder="Search Recipe"
              inputProps={{ "aria-label": "search recipe" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div>
          <Grid container>
            {recipes.map((item, index) => (
              <Grid item xs={6}>
                <Recipe
                  key={index}
                  title={item.recipe.label}
                  image={item.recipe.image}
                  calories={item.recipe.calories}
                  ingredients={item.recipe.ingredients}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default Recipes;
