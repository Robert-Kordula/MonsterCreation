import React from 'react';
import StringFilter from '../components/Forms/StringFilter';
import IntegerFilter from '../components/Forms/IntegerFilter';
import DropDownFilter from '../components/Forms/DropDownFilter';
import MultiDropFilter from '../components/Forms/MultiDropFilter';
import TextField from '@mui/material/TextField';
import DynamicTable from '../components/Tables/DynamicTable';

export default function BuildSection(props) {
    const label = props.label;
    const attributeNames = Object.keys(props.attributes[label]);
    return (attributeNames.map((name) => (
            <BuildField 
                attribute={props.attributes[label][name]} 
                label={name} 
                useNewData={props.useNewData}
                data={props.data}
                />
        ))
    )
}

function BuildField(props) {
    let label = props.label;
    let attribute = props.attribute;
    let data = props.data;
    if (attribute.inputType === 'table') {
        return (<DynamicTable
            label={label}
            data={data}
            columns={attribute.table}
            useNewData={props.useNewData}
            isInitial={props.isInitial}
        />);
    }
    else if (attribute.inputType === 'integer' || attribute.inputType === 'range') {
        return (<IntegerFilter
            label={label}
            userFilters={props.useNewData}
            data={data}
        />);
    }
    else if (attribute.inputType === 'multi-line') {
        return (<TextField
            key={label}
            label={label}
            multiline
            minRows={3}
            maxRows={6}
            variant='outlined'
            onChange={(event) => console.log(event.target.value)}
            value={data['notes'] || 'N/A'}
        />)
    }
    else if (attribute.inputType === 'drop-downs') {
        return (<DropDownFilter
            label={label}
            userFilters={props.useNewData}
            data={data}
            values={attribute.values}
        />)
    }
    else if (attribute.inputType === 'multi-drop-down') {
        return (<MultiDropFilter
            label={label}
            userFilters={props.useNewData}
            data={data}
            values={attribute.values}
        />)
    }
    else if (attribute.inputType === 'string') {
        return (<StringFilter
            label={label}
            userFilters={props.useNewData}
            data={data}
        />);
    }
    return null;
}