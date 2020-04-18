import React, { useEffect } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Notification(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (props) {
            if (props.location.state['notification']) {
                setOpen(true);
            }
        }
    }, [props]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar
                open={open}
                onClose={handleClose}
                autoHideDuration={6000}
            >
                <Alert onClose={handleClose} severity="success">
                    Congrats! Your order was successfully done.
                </Alert>
            </Snackbar>
        </div>
    );
}