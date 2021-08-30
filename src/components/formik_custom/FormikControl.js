import React from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import CheckBox from './Checkbox';

function FormikControl(props){
    const { control, ...rest } = props;
    
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'checkbox':
            return <CheckBox {...rest}/>
        default:
            return null;
    }
}

export default FormikControl;