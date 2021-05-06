import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DirectionsIcon from "@material-ui/icons/Directions";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@material-ui/core";
import { Context } from "../Context";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  const { searchFilter, search, handleSearch } = useContext(Context);

  const handleChange = () => {};

  return (
    <div className="form_group">
      <Paper className="search_bar">
        <IconButton disabled>
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Paper>

      {/* CHECKBOX FILTERING IS NOT YET COMPLETED, NEED TO BE COMPLETED IN FUTURE */}
      <Paper className="select_field">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Team</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="bussiness" />
                  }
                  label="Bussiness"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="finance" />}
                  label="Finance"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="engineering" />
                  }
                  label="Engineering"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="design" />}
                  label="Design"
                />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Paper>

      <Paper className="select_field">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="fullTime" />}
                  label="Full Time"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="partTime" />}
                  label="Part Time"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} name="internship" />
                  }
                  label="Internship"
                />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </div>
  );
}
