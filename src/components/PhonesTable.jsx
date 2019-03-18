import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Table from "./Table/Table";
import Like from "./Like";

class PhonesTable extends Component {

  columns = [
    {path: 'imageUrl', label: 'Image', sort: false},

    {
      path: 'name',
      label: 'Phone name',
      sort: true,
      content: (phone) => <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
    },

    {path: 'age', label: 'Age', sort: true},

    {
      key: 'like',
      label: 'Like',
      sort: false,
      content: (phone) =>
            <Like
                  onClick={() => this.props.onLike(phone)}
                  liked={phone.liked}
            />
    },
  ];


  render() {
    const {phones, sortColumn, onSort} = this.props;

    return (
          <Table
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
                data={phones}
          />
    );

  }
}

export default PhonesTable;
