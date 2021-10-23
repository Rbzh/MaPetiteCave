import { Card, Typography } from "@mui/material";
import { Bottle } from "../model/Bottle";

export function BottleDetail(props: any) {
    return <Card>
        <Typography variant="h3">{props.bottle.name}</Typography>
        <Typography>{props.bottle.description}</Typography >
        <Typography>Provenance : {props.bottle.from}</Typography >
    </Card>
}