import React, { Component } from "react";
import { connect } from "react-redux";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export class NewCocktail extends Component {
  state = {
    name: "",
    image: "",
    ingredients: "",
    instructions: "",
  };

  handleInputChange = (e) => ({
    [e.target.name]: e.target.value,
  });

  render() {
    return (
      <div>
        <h1>New Cocktail</h1>
        <form className="cocktailForm" noValidate autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input
              id="component-simple"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-helper">Name</InputLabel>
            <Input
              id="component-helper"
              value={this.state.image}
              onChange={this.handleInputChange}
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Some important helper text
            </FormHelperText>
          </FormControl>
          <FormControl disabled>
            <InputLabel htmlFor="component-disabled">Name</InputLabel>
            <Input
              id="component-disabled"
              value={this.state.ingredients}
              onChange={this.handleInputChange}
            />
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl error>
            <InputLabel htmlFor="component-error">Name</InputLabel>
            <Input
              id="component-error"
              value={this.state.instructions}
              onChange={this.handleInputChange}
              aria-describedby="component-error-text"
            />
            <FormHelperText id="component-error-text">Error</FormHelperText>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Name</InputLabel>
            <OutlinedInput
              id="component-outlined"
              //   value={name}
              onChange={this.handleInputChange}
              label="Name"
            />
          </FormControl>
          <FormControl variant="filled">
            <InputLabel htmlFor="component-filled">Name</InputLabel>
            <FilledInput
              id="component-filled"
              //   value={name}
              onChange={this.handleInputChange}
            />
          </FormControl>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewCocktail);
