import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  dashedBorder: {
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
  gap: {
    gap: theme.spacing(2),
  },
  wrapper: {
    display: 'flex',
    '& .filterblk': {
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: theme.spacing(1),
      '& h6': {
      },
      '& .ln': {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        width: '100%',
        '&.align-reverse': {
          justifyContent: 'flex-end',
        },
        '& h6': {
          width: 260,
          textAlign: 'right',
        },
      }
    }
  }
}));
