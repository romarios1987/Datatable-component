import React, {Component} from 'react';
import {paginate} from "../utils/paginate";
import _ from "lodash";
import axios from 'axios';
import SearchBox from "./SearchBox";
import Pagination from "./Pagination";
import PhonesTable from "./PhonesTable";

const apiPhones = 'https://romarios1987.github.io/phone-catalog/api/phones.json';

class Phones extends Component {

  state = {
    phones: [],

    currentPage: 1,
    pageSize: 4,
    searchQuery: '',

    sortColumn: {
      path: 'name',
      order: 'asc'
    }
  };

  async componentDidMount() {
    const {data: phones} = await axios.get(apiPhones);
    this.setState({phones})
  }

  handleLike = (phone) => {
    const phones = [...this.state.phones];
    const index = phones.indexOf(phone);
    phones[index] = {...phones[index]};
    phones[index].liked = !phones[index].liked;
    this.setState({phones})
  };

  handlePageChange = (page) => {
    this.setState({currentPage: page})
  };

  handleSort = (sortColumn) => {
    this.setState({sortColumn})
  };

  handleSearch = (query) => {
    this.setState({searchQuery: query, currentPage: 1})
  };


  getPhone(id) {
    return this.phones.find(phone => phone.id === id);
  }


  getPagedData = () => {

    const {
      phones: allPhones,
      searchQuery,
      pageSize,
      currentPage,
      sortColumn
    } = this.state;


    let filtered = allPhones;

    if (searchQuery)
      filtered = allPhones.filter((phone) =>
            phone.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const phones = paginate(sorted, currentPage, pageSize);

    return {totalCount: filtered.length, data: phones}
  };


  render() {

    const {length: count} = this.state.phones;

    const {pageSize, currentPage, sortColumn, searchQuery} = this.state;

    if (count === 0) return <p>There are no <strong>Phones</strong> in the database.</p>;


    const {totalCount, data: phones} = this.getPagedData();

    return (
          <div className="row">

            <div className="col">

              <p>Showing {totalCount} <strong>Phones</strong> in the database</p>

              <SearchBox value={searchQuery} onChange={this.handleSearch}/>

              <PhonesTable
                    phones={phones}
                    sortColumn={sortColumn}
                    onLike={this.handleLike}
                    onSort={this.handleSort}
              />


              <Pagination
                    itemsCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
              />

            </div>
          </div>
    );
  }
}

export default Phones;
