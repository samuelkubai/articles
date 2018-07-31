import React, { PureComponent } from 'react'
import '../../node_modules/material-design-lite/material.js'
import './index.scss'

export default class DataTable extends PureComponent {
    render () {
        const { columns, style } = this.props;

        let columnStyles = {};

        // Make sure that if a width is set no column takes more
        // that 50% of the table's width.
        if (style.width) {
            columnStyles.maxWidth = parseInt(style.width) * 0.50 + 'px';
        }

        return (
            <div style={style}>
                <table className={"mdl-data-table mdl-js-data-table mdl-shadow--2dp"} style={{width: "100%"}}>
                    <thead>
                    <tr>
                        <th className={"mdl-data-table__cell--non-numeric"}>Name</th>
                        <th className={"mdl-data-table__cell--non-numeric"}>Description</th>
                        <th className={"mdl-data-table__cell--non-numeric"}>Status</th>
                        <th className={"mdl-data-table__cell--non-numeric"}>Date</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        columns.length > 1 ?
                            columns.map((column, id) =>{
                                return (
                                    <tr key={id}>
                                        <td style={columnStyles} className={"mdl-data-table__cell--non-numeric"}>{column.name}</td>
                                        <td style={columnStyles} className={"mdl-data-table__cell--non-numeric"}>{column.description}</td>
                                        <td style={columnStyles} className={"mdl-data-table__cell--non-numeric"}>{column.status}</td>
                                        <td style={columnStyles} className={"mdl-data-table__cell--non-numeric"}>{column.dateCreated}</td>
                                    </tr>
                                );
                            }):
                            <tr>
                                <td className={"table-header"} colSpan={4}>
                                    No data provided.
                                </td>
                            </tr>
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
