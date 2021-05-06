import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import {
  PublicTwoTone,
  AccessTimeTwoTone,
  AccountBoxTwoTone,
  Facebook,
  Twitter,
  LinkedIn,
  KeyboardBackspace,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const JobLeftCard = ({ job }) => {
  return (
    <div>
      <List>
        <Link to="/">
          <h6>
            <KeyboardBackspace style={{ fontSize: "12px" }} />
            {"   "}
            ROLES AT STRIPE
          </h6>
        </Link>

        <Divider variant="fullWidth" component="li" />
        <ListItem>
          <ListItemAvatar>
            <PublicTwoTone />
          </ListItemAvatar>

          <ListItemText primary={job && job.city} />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem>
          <ListItemAvatar>
            <AccessTimeTwoTone />
          </ListItemAvatar>

          <ListItemText primary={job && job.type} />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem>
          <ListItemAvatar>
            <AccountBoxTwoTone />
          </ListItemAvatar>

          <ListItemText primary={job && job.team} />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <div className="social_icons">
          <Facebook />
          <Twitter />
          <LinkedIn />
        </div>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              alert(`Successfully applied for ${job.role} position`)
            }
          >
            apply now
          </Button>
        </Link>
      </List>
    </div>
  );
};

export default JobLeftCard;
