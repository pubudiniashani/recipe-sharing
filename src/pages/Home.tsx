import RecipeReviewCard from "../components/Card.tsx";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";


const Home = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                WELCOME TO RECIPE FINDER
            </Typography>

            <RecipeReviewCard />
        </Box>
    );
};

export default Home;