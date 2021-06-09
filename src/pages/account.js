import React from "react";

import { Link } from "react-router-dom";

import bewerken from "../../public/img/bewerken.png";

export default class Account extends React.Component {
  state = {
    loading: true,
    maadState: null
  };

  constructor(props) {
    super(props);
    //this.addRecord = this.addRecord.bind(this);
  }

  async componentDidMount() {
    const url =
      "https://api.airtable.com/v0/appwF2fIxMtd5aWsq/account/?api_key=keyiKLBibtNS6VRBi";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.records);
    this.setState({ maadState: data.records, loading: false });
  }

  render() {
    if (this.state.loading || !this.state.maadState) {
      return (
        <div>
          <h1> LOADING... </h1>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/accountDetail" className="link_button_detail">
            <button onClick={this.addRecord}>
              <img className="account_img" src={bewerken} alt="Logo" />
            </button>
          </Link>

          {this.state.maadState.map((item, i) => {
            return (
              <div className="airtable_item">
                <div className="card_data">
                  {item.fields.naam && <h1>{item.fields.naam}</h1>}
                  {item.fields.regio && <p>Regio: {item.fields.regio}</p>}
                  {item.fields.rank && <p>Rank: {item.fields.rank}</p>}
                  {item.fields.regio && <p>Regio: {item.fields.regio}</p>}
                  {item.fields.taas && <p>Top aas: {item.fields.aas}</p>}
                  {item.fields.vis && <p>Top vis: {item.fields.vis}</p>}
                  <span>{item.model}</span>
                </div>
                <div className="card_img">
                  <img
                    alt="maadje"
                    src={item.fields.afbeelding[0].url}
                    width="50px"
                  />
                </div>
                <div className="card_bio">
                  {item.fields.bio && <p>{item.fields.bio}</p>}
                </div>
              </div>
            );
          })}
          <div className="vriendCode">
            <h2>Uw maadjes code</h2>
            <p>1254-5892-4256</p>
          </div>
        </div>
      );
    }
  }
}
