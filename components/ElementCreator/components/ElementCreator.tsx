import Checkbox from '@/components/checkbox/Checkbox';
import NumberField from '@/components/number/NumberField';
import PasswordField from '@/components/password/Password';
import RadioField from '@/components/radio/Radio';
import TextField from '@/components/textField/TextField';
import React from 'react';

interface ElementProps {
    id: string;
    text: string;

    type: string;
    elementType: string;
}

const generateElement = (elementProps: ElementProps) => {
    const { id, text, type, elementType } = elementProps;

    switch (elementType) {
        case 'checkbox':
            return <Checkbox text={text} id={id} type={type} />
        case 'text':
            return <TextField text={text} id={id} type={type} />
        case 'number':
            return <NumberField text={text} id={id} type={type} />
        case 'password':
            return <PasswordField text={text} id={id} type={type} />;
        case 'radio':
            // You can define your own custom component here
            return <RadioField text={text} id={id} type={type} />;
        default:
            return null;
    }
};

const ElementCreator = ({ elementType, id, text, type }: ElementProps) => {
    const element = { elementType, id, text, type }

    const dynamicElement = generateElement(element);

    return <div>{dynamicElement}</div>;
};

export default ElementCreator;
