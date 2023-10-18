'use client'


import { ChangeEvent, useState } from "react"

interface Fields {
    [key: string]: string | number
}

type EventHandler = (event: ChangeEvent<HTMLInputElement>) => void;

export const useForm = (initialState: Fields): [Fields, EventHandler, (fields: Fields) => void] => {

    const [fields, setFields] = useState(initialState)

    const handleInputChange: EventHandler = ({ target }: any) => {
        let { value, name: field, type, checked } = target

        switch (type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = checked
            default:
                break;
        }
        setFields((prevFields) => ({ ...prevFields, [field]: value }))
    }


    return [fields, handleInputChange, setFields]


}