import React, { useEffect, useState } from 'react'
import { Container, Grid, GridColumn, Header } from 'semantic-ui-react'
import { CarsProps } from '../Pages/MainPage'
import SelectFilter from './SelectFilter';
import { FilterOptionColor, FilterOptionSpeed, FilterOptionClass } from './FilterOptions'


interface carsPropsData {
    displayedData: CarsProps[],
    setDisplayedData: Function,
    data: CarsProps[]
}

const Filter = ({ displayedData, setDisplayedData, data }: carsPropsData): JSX.Element => {
    const defaultValue = 'all'
    const [colorValue, setColorValue] = useState(defaultValue)
    const [speedValue, setSpeedValue] = useState(defaultValue)
    const [classValue, setClassValue] = useState(defaultValue)

    const filterArrray = () => {
        let filteredArr = data;

        if (colorValue !== defaultValue) filteredArr = filteredArr.filter((car) => car.color === colorValue)
        if (speedValue !== defaultValue) {
            if (speedValue === 'max') filteredArr = filteredArr.filter((car) => car.speed > 120)
            if (speedValue === 'min') filteredArr = filteredArr.filter((car) => car.speed < 70)
        }
        if (classValue !== defaultValue) filteredArr = filteredArr.filter((car) => car.carClass === classValue)

        setDisplayedData(filteredArr)
    }

    useEffect(filterArrray, [colorValue, speedValue, classValue, displayedData.length])


    return (
        <Container textAlign='center' >
            <Header as='h1'>Фильтрация</Header>
            <Grid columns={3}>
                <GridColumn>
                    <SelectFilter options={FilterOptionColor} header="Цвет" placeholder='Выберите цвет' setValue={setColorValue} />
                </GridColumn>
                <GridColumn>
                    <SelectFilter options={FilterOptionSpeed} header="Скорость max/min" placeholder='Выберите скорость' setValue={setSpeedValue} />
                </GridColumn>
                <GridColumn>
                    <SelectFilter options={FilterOptionClass} header="Класс авто" placeholder='Выберите класс авто' setValue={setClassValue} />
                </GridColumn>
            </Grid>
        </Container >
    )
}

export default Filter