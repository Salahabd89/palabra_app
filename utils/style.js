import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({


    btn: {
      position: 'fixed',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
        marginLeft:'14%'
    },
    box: {
      flexGrow: 1,
      flexWrap: 'wrap',
      display:"flex",
      position: 'fixed',
      top: '20%',
      left: '27%',
      justifyContent: 'center'

    },

    searchBar: {
      flexGrow: 1,
      display:"flex",
      width:'50%',
      left:'0%'
  },

  select:{

    flexGrow: 1,
    display:"flex",
    width:'50%',
    left:'0%'

  }
  
  }));