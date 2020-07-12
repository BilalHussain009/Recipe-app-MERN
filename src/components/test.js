import React from 'react';


import {Card, CardBody, CardHeader} from 'reactstrap';

const OnBoarding = ({match, history}) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            disableBackdropClick
            disableEscapeKeyDown
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Card className="shadow border-0 w-75 d-flex on-boarding">
                    <CardHeader className="bg-primary text-white">
                       Card Header
                    </CardHeader>
                    <CardBody>                    
                      Card Body 
                    </CardBody>
                </Card>
            </Fade>
        </Modal>
    );
}
export default OnBoarding