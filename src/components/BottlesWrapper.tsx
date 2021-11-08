import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import 'firebase/firestore';
import { BottleList } from "./BottleList";
import { collection, orderBy, query } from "firebase/firestore";


const useStyles = makeStyles({
    app: {
        padding: '30px'
    },
});


export function BottlesWrapper(props: any) {
    const classes = useStyles();

    const bottlesCollection = collection(useFirestore(), 'bottles');
    const bottlesQuery = query(bottlesCollection, orderBy('name', 'asc'));
    const { status, data: bottles } = useFirestoreCollectionData(bottlesQuery, {
        idField: 'id',
    });


    if (status === 'loading') {
        return <Typography>Chargement en cours</Typography>;
    }

    return (
        <Box className={classes.app}>
            <BottleList bottles={bottles} />
        </Box >
    )
}