import React from 'react'
import { Header, Select } from 'semantic-ui-react'



interface Props {
    options: Array<Object>,
    header: string,
    placeholder: string,
    setValue: Function
}

const SelectFilter = ({ options, header, placeholder, setValue }: Props): JSX.Element => {
    const changeFilter = (value: string) => setValue(value)
    return (
        <>
            <Header as='h3' content={header} />
            <Select placeholder={placeholder} options={options} onChange={(event, value) => changeFilter(value.value as string)} />
        </>

    )

}

export default SelectFilter