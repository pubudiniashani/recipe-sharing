
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#7e57c2' }}>
            <Toolbar>
                <Typography variant="h6" style={{ color: 'white' }}>
                    WELCOME TO RECIPE FINDER !!!
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
