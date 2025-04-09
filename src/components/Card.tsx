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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import pastaImg from '../assets/pasta.jpeg';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

type RecipeCardProps = {
    title: string;
    image: string;
    description: string;
    methodSteps: string[];
};

export default function RecipeReviewCard(props: RecipeCardProps) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const recipes = [
        {
            title: 'Shrimp and Chorizo Paella',
            image: '/static/images/cards/paella.jpg',
            description: 'A perfect party dish with shrimp and chorizo.',
            methodSteps: [
                'Heat 1/2 cup of the broth...',
                'Heat oil in a paella pan...',
                'Add rice and stir gently...',
                'Set aside off the heat and serve.',
            ],
        },
    ]

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.title}
                // title="Shrimp and Chorizo Paella"
                // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                // image={pastaImg}
                image={props.image}
                alt="Paella dish"
            />

            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {/*This impressive paella is a perfect party dish and a fun meal to cook*/}
                    {/*together with your guests. Add 1 cup of frozen peas along with the mussels,*/}
                    {/*if you like.*/}
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                    {props.methodSteps.map((step, index) => (
                        <Typography key={index} sx={{ marginBottom: 1 }}>
                            {index + 1}. {step}
                        </Typography>
                    ))}
                </CardContent>
            </Collapse>

        </Card>
    );
}
