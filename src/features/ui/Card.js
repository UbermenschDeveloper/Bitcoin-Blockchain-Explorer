import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    marginLeft: 16,
  }
});

const Card = ({ children, title }) => {
  const css = useStyles();

  return (
    <MaterialCard>
      <CardContent>
        <Typography className={css.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
    </MaterialCard>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Card;
