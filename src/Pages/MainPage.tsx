import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Button, Segment, Container } from 'semantic-ui-react'
import CarCard from '../Components/CarCard';
import Alert from '../Components/Alert';


export interface CarsProps {
    id: string;
    timestamp: number;
    color: string;
    carClass: string;
    plate: string;
    speed: number;
}


const MainPage = (): JSX.Element => {

    const url = "ws://localhost:5001"
    const [isPaused, setIsPaused] = useState(false);
    const [data, setData] = useState<CarsProps[]>([]);
    const [status, setStatus] = useState("");
    const [open, setOpen] = useState(false);
    const ws: any = useRef();

    useEffect(() => {
        if (!isPaused) {
            ws.current = new WebSocket(url); // создаем ws соединение
            wsOpen();
            wsClose();

            gettingData();
        }
        return () => ws.current.close(); // кода меняется isPaused - соединение закрывается
    }, [ws, isPaused]);

    const wsOpen = () => {
        ws.current.onopen = () => {
            setStatus("Соединение открыто")
            setOpen(true)
        };
    }
    const wsClose = () => {
        ws.current.onclose = () => {
            setStatus("Соединение закрыто")
            setOpen(true)
        }
    }

    const gettingData = useCallback(() => {
        if (!ws.current) return;

        ws.current.onmessage = (e: { data: string; }) => {                //подписка на получение данных по вебсокету
            if (isPaused) return;
            const cars = JSON.parse(e.data);
            setData(prev => [...prev, cars]);

        };
    }, [isPaused]);
    return (
        <div>
            <Alert open={open} setOpen={setOpen} info={status} />
            <Container textAlign='center'>
                <Button style={{ marginTop: "1%" }} color="orange" onClick={() => {
                    ws.current.close();
                    setIsPaused(!isPaused)
                }}>{!isPaused ? 'Остановить соединение' : 'Открыть соединение'}</Button>
            </Container>
            <Segment raised color='purple' style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <CarCard data={data} />
            </Segment>

        </div >

    )
}

export default MainPage;