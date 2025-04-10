import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import pastaImg from '../assets/penne-pasta.jpg';
import pizzaImg from '../assets/pizza.jpeg';
import burgurImg from '../assets/burgur.jpeg';
import hotdogImg from '../assets/hotdog.jpeg';
import spaghettiImg from '../assets/spaghetti.jpg';
import chickenImg from '../assets/Drumsticks.jpg';
import cheesecakeImg from '../assets/cheesecake.jpg';
import friesImg from '../assets/frenchfries.jpg';
import Grid from '@mui/material/Grid';


export default function RecipeReviewCard() {
    const recipes = [
        {
            title: 'Shrimp pasta',
            image: pastaImg,
            description: 'A popular Italian pasta dish with a variety of sauces, from rich tomato-based  ' +
                'flavour and meat sauces to creamy cheese flavour.',

        },
        {
            title: 'Margherita pizza',
            image: pizzaImg,
            description: 'Margherita pizza is a classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil,',

        },
        {
            title: 'Chicken burger',
            image: burgurImg,
            description: 'CA chicken burger is a delicious sandwich featuring a seasoned chicken patty in a bun with toppings like lettuce, tomato, cheese, and sauces for a satisfying bite.',

        },
        {
            title: 'Spaghetti',
            image: spaghettiImg,
            description: 'Spaghetti is Italian cuisine, often served with a variety of sauces like marinara, Bolognese, or carbonara for a hearty and flavorful meal.',

        },
        {
            title: 'Hotdog bun',
            image: hotdogImg,
            description: 'A hotdog is a popular fast food item consisting of a sausage, served in a sliced bun and often topped with condiments like mustard, ketchup, onions, relish, or cheese.',

        },
        {
            title: 'Fried Chicken',
            image: chickenImg,
            description: 'Fried chicken is a crispy and flavorful dish made by seasoning chicken pieces, coating them in flour or batter, and deep-frying them until golden brown',

        },
        {
            title: 'Cheesecake',
            image: cheesecakeImg,
            description: 'Cheesecake is a rich and creamy dessert made with a smooth mixture of cream cheese, sugar, and eggs on a buttery crust',

        },
        {
            title: 'French Fries',
            image: friesImg,
            description: 'French fries are thinly sliced potatoes that are deep-fried until golden and crispy, often served salted and enjoyed as a snack or side dish with ketchup, mayo, or other dips.',

        },
    ];

    return (
        <Grid container spacing={2} justifyContent="center">
            {recipes.map((recipe, index) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={index}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Card sx={{ width: 300, display: 'flex', flexDirection: 'column' }}>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={recipe.title}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={recipe.image}
                            alt={recipe.title}
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {recipe.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>

                        </CardActions>
                        {/*<Collapse*/}
                        {/*    in={expandedCardIndex === index}*/}
                        {/*    timeout="auto"*/}
                        {/*    unmountOnExit*/}
                        {/*>*/}
                        {/*    <CardContent>*/}
                        {/*        <Typography sx={{ marginBottom: 2 }}>Method:</Typography>*/}
                        {/*        {recipe.methodSteps.map((step, stepIndex) => (*/}
                        {/*            <Typography key={stepIndex} sx={{ marginBottom: 1 }}>*/}
                        {/*                {stepIndex + 1}. {step}*/}
                        {/*            </Typography>*/}
                        {/*        ))}*/}
                        {/*    </CardContent>*/}
                        {/*</Collapse>*/}
                    </Card>
                </Grid>
            ))}
        </Grid>

    );
}