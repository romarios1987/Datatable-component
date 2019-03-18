import React, {Component} from 'react';

import {getPhoneById} from "../services";


class DetailsPhone extends Component {


  state = {
    phoneDetails: {},
    error: ''
  };

  async componentDidMount() {

    await this.showDetailsPhone();

  }

  showDetailsPhone = async () => {

    const phoneId = this.props.match.params.id;

    try {
      const phoneDetails = await getPhoneById(phoneId);
      this.setState({phoneDetails: phoneDetails.data});
    } catch (err) {
      this.setState({error: 'Нет такого тавара'});
    }

  };


  render() {
    const {name} = this.state.phoneDetails;
    const {error} = this.state;

    const res = !error ? name : error;

    console.log(this.state.phoneDetails);
    return (
          <div>
            {res}
          </div>
    );
  }
}

export default DetailsPhone;
