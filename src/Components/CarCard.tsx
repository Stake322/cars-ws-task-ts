import React, { useEffect } from 'react'
import { Card, Container, Grid, GridColumn, Icon, Image, Segment, Popup, SemanticCOLORS } from 'semantic-ui-react'
import { toDate } from '../utils';
import { CarsProps } from '../Pages/MainPage'

interface carsPropsData {
    data: CarsProps[];
}

const CarCard = ({ data }: carsPropsData): JSX.Element => {

    const reNameCars: { [key: string]: string } = {
        car: "Автомобиль",
        truck: "Грузовой автомобиль",
        bus: "Автобус",
        motorcycle: "Мотоцикл",
    }
    const colorsCars: { [key: string]: SemanticCOLORS } = {
        black: 'black',
        red: 'red',
        green: 'green',
        blue: 'blue',
        yellow: 'yellow',
        silver: 'grey',
    }

    const reNameColors: { [key: string]: string } = {
        black: 'Черный',
        red: 'Красный',
        green: 'Зеленый',
        blue: 'Синий',
        yellow: 'Желтый',
        silver: 'Серебрянный',
        white: 'Белый'
    }

    const renderCards = () => {
        return (data.length) ? data.map((value, index) => {
            return (
                <GridColumn width={4} key={value.id}>
                    <Card color={colorsCars[value.color] || ''}>
                        <Card.Content>
                            <Card.Header>{reNameCars[value.carClass]}</Card.Header>
                            <Popup content={value.plate} trigger={<Image size='small' src={`https://www.car72.ru/nomer/rus/${value.plate}.png`} wrapped ui={false} />} />
                            <Card.Description>
                                Скорость: {value.speed} КМ/Ч
                            </Card.Description>
                            <Card.Description>
                                Цвет: {reNameColors[value.color]}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='time' />
                            {toDate(value.timestamp)}
                        </Card.Content>
                    </Card>
                </GridColumn >

            )
        }) : <></>
    }
    return (
        <Grid>
            {renderCards()}
        </Grid>
    )
}

export default CarCard