import React from 'react';

export default function EditableAttribute(props) {
    let attribute = props.attribute;
    let label = Object.keys(attribute)[0];
    let value = attribute[label]['value'];
    const UserComponent = props.userComponent;

    return (
        <UserComponent {...props.userProps} />
    )
}