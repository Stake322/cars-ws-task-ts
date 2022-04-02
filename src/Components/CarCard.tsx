import React, { useEffect } from 'react'
import { Card, Grid, GridColumn, Icon, Image, Popup, SemanticCOLORS } from 'semantic-ui-react'
import { toDate } from '../utils';
import { CarsProps } from '../Pages/MainPage'

interface carsPropsData {
    displayedData: CarsProps[];
}

export const reNameCars: { [key: string]: string } = {
    car: "Автомобиль",
    truck: "Грузовой автомобиль",
    bus: "Автобус",
    motorcycle: "Мотоцикл",
}
export const reNameColors: { [key: string]: string } = {
    black: 'Черный',
    red: 'Красный',
    green: 'Зеленый',
    blue: 'Синий',
    yellow: 'Желтый',
    silver: 'Серебрянный',
    white: 'Белый'
}
const CarCard = ({ displayedData }: carsPropsData): JSX.Element => {
    const colorsCars: { [key: string]: SemanticCOLORS } = {
        black: 'black',
        red: 'red',
        green: 'green',
        blue: 'blue',
        yellow: 'yellow',
        silver: 'grey',
        white: "grey",
    }

    const renderCards = () => {
        return (displayedData.length) ? displayedData.map((value, index) => {
            return (
                <GridColumn key={value.id}>
                    <Card color={colorsCars[value.color] || ''}>
                        <Card.Content>
                            <Card.Header>{reNameCars[value.carClass]}</Card.Header>
                            <Popup hoverable content={value.plate} trigger={<Image size='small' src={`https://www.car72.ru/nomer/rus/${value.plate}.png`} wrapped ui={false} />} />
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
        <Grid columns={5}>
            {renderCards()}
        </Grid>
    )
}

export default CarCard