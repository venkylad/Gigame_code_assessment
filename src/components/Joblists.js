import {
  Table,
  TableContainer,
  Paper,
  TableCell,
  TableRow,
  TableBody,
  Typography,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
import { Context } from "../Context";
import { jobData } from "../data";

// css in js using material-ui styles
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// css in js using material-ui styles
const useStyles = makeStyles({
  table: {
    width: "90vw",
    position: "absolute",
    zIndex: 1,
    top: 200,
    left: "5%",
  },
  tableRow: {
    border: "1px solid black",
  },
  role: {
    color: "blue",
    fontFamily: "Poppins",
    textDecoration: "none",
  },
});

const Joblists = () => {
  const classes = useStyles();
  const length = jobData.length;

  const {
    searchFilter,
    search,
    data,
    handleReset,
    filteredSearch,
  } = useContext(Context);

  return (
    <div>
      <TableContainer className={classes.table} component={Paper}>
        <div className="job_num">
          {/* displayed only when no data available as per search */}
          {data.length === 0 ? (
            <Typography variant="h6">
              No open roles match your search. Try removing filters or changing
              your search terms
            </Typography>
          ) : (
            <Typography variant="h6">
              {data.length} roles across <strong>all locations</strong> and{" "}
              <strong>all teams</strong>
            </Typography>
          )}

          {/* shows number of roles as per search */}
          {data.length < length && (
            <Typography
              variant="h6"
              color="primary"
              className="clear_search"
              onClick={() => {
                handleReset();
              }}
            >
              Clear All Filters
              <CancelIcon
                style={{ fontSize: "20px", margin: "3px 0px -2px 4px" }}
              />
            </Typography>
          )}
        </div>

        <Table aria-label="customized table">
          <TableBody>
            {data.map((job, i) => (
              <StyledTableRow key={job.id}>
                <StyledTableCell align="left">
                  <Link to={`/${job.id}`}>
                    <h3 className={classes.role}>{job.role}</h3>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="left">{job.team}</StyledTableCell>
                <StyledTableCell align="left">{job.city}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Joblists;
