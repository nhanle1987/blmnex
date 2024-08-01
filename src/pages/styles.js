import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  Wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  FncLink: {
    display: 'flex',
    width: `calc(100% / 2 - ${theme.spacing(2)}px)`,
    height: '50px',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    boxShadow: theme.customShadows.widgetWide,
    backgroundColor: theme.palette.background.white,
    fontSize: 18,
    textDecoration: 'none',
    borderRadius: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.background.light,
      boxShadow: theme.customShadows.widget,
    },
  },
}));