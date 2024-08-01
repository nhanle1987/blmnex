import React from "react";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";
import classNames from "classnames";

export default function PageTitle(props) {
  const classes = useStyles();
  const { title, description, button } = props;
  console.log(classes)
  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classNames(classes.typo, 'title')} variant="h1" size="sm">
        {title}
        {description && (
          <Typography className={classNames(classes.typo, 'block', 'description')} variant="body2" size="md">
            {description}
          </Typography>
        )}
      </Typography>
      {button && button}
    </div>
  );
}
