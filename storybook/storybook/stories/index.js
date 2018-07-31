import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../components/Button';
import DataTable from '../../components/Datatable'

storiesOf('Button', module)
    .add('with text', () => (
            <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));


const columns = [
    {
        name: 'John Doe',
        description: 'This is a description of the John Doe guy in movies',
        status: 'Active',
        dateCreated: '31/04/2018 21:18:00'
    },
    {
        name: 'John Doe',
        description: 'This is a description of the John Doe guy in movies a description of the John Doe guy in movies a description of the John Doe guy in movies',
        status: 'Active',
        dateCreated: '31/04/2018 21:18:00'
    },
    {
        name: 'John Doe',
        description: 'This is a description of the John Doe guy in movies',
        status: 'Active',
        dateCreated: '31/04/2018 21:18:00'
    },
    {
        name: 'John Doe',
        description: 'This is a description of the John Doe guy in movies',
        status: 'Active',
        dateCreated: '31/04/2018 21:18:00'
    },
    {
        name: 'John Doe',
        description: 'This is a description of the John Doe guy in movies',
        status: 'Active',
        dateCreated: '31/04/2018 21:18:00'
    }
];

storiesOf('Data Table', module)
    .add('without data', () => (
        <DataTable columns={[]} style={{width: "800px"}}/>
    ))
    .add('with dummy data', () => (
        <DataTable columns={columns} style={{width: "800px"}}/>
    ))
    .add('with pagination', () => (
        <DataTable columns={[...columns,...columns,...columns,...columns]} style={{width: "800px"}}/>
    ));
