import React, {Component} from 'react';
import _ from 'lodash';

class TableBody extends Component {

  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path)
  };


  createKey = (item, column) => {
    return item.id + (column.path || column.key)
  };


  render() {
    const {data, columns} = this.props;
    console.log(columns);
    return (
          <tbody>
          {data.map((item) =>
                <tr key={item.id}>
                  {columns.map((column) =>
                        <td
                              key={this.createKey(item, column)}>
                          {
                            column.path === 'imageUrl' ? <img src={this.renderCell(item, column)} alt={ item.name} width={75}/> : this.renderCell(item, column)
                          }
                        </td>
                  )}
                </tr>
          )}
          </tbody>
    );
  }
}

export default TableBody;