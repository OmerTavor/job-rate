import { AppBar, Toolbar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import styles from './styles';

const JobRateAppBar = () => {
  return (
    <AppBar position="sticky" sx={styles.appBarStyle}>
      <Toolbar>
        <IconButton>
          <HomeIcon sx={styles.homeIconStyle} />
        </IconButton>
        <IconButton sx={styles.AddIconButtonStyle}>
          <AddBoxIcon sx={styles.AddIconStyle} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default JobRateAppBar;
