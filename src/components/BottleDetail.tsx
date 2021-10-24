import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    bottleCard: {
        maxWidth: '500px',
        margin: 'auto',
        marginTop: '30px'
    },
});

export function BottleDetail(props: any) {

    const classes = useStyles();

    return <Card variant="outlined" className={classes.bottleCard}>
        <CardContent>
            <Typography variant="h5">{props.bottle.name}</Typography>
            <Typography>{props.bottle.description}</Typography >
            <Typography>Provenance : {props.bottle.from}</Typography >
        </CardContent>
    </Card>
}