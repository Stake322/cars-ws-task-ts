import React, { useEffect, useRef } from 'react'
import {
    Header,
    Segment,
    TransitionablePortal,
} from 'semantic-ui-react'

interface Props {
    open: boolean,
    info: string,
    setOpen: Function;
}

function Alert({ open, info, setOpen }: Props): JSX.Element {
    const intervalRef = useRef<NodeJS.Timeout>();
    useEffect(() => {
        const closePopup = () => setOpen(false);
        if (open) {
            intervalRef.current = setTimeout(closePopup, 1500)
        }
        return () => clearInterval(intervalRef.current as NodeJS.Timeout)

    }, [open])
    return (
        <div>
            <TransitionablePortal open={open}>
                <Segment
                    textAlign='center'
                    style={{ left: '80%', position: 'fixed', top: '0%', zIndex: 1000 }}
                >
                    <Header>{info}</Header>
                </Segment>
            </TransitionablePortal>

        </div>
    );
}

export default Alert;