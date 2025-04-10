import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}


export default function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'red' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    textColor="inherit"

                    sx={{
                        '& .MuiTabs-flexContainer': {
                            justifyContent: 'center',
                        },
                    }}
                >
                    <Tab label="Feed" />
                    <Tab label="Recipe Details" />
                    <Tab label="Add Recipes" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Feed
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Recipe Details
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               Add Recipes
            </CustomTabPanel>
        </Box>
    );
}
