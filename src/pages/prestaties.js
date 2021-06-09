import React from "react";

export default class Prestaties extends React.Component {
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
      "https://api.airtable.com/v0/appwF2fIxMtd5aWsq/prestatie/?api_key=keyiKLBibtNS6VRBi";
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
          <button onClick={this.addRecord}>+</button>
          {this.state.maadState.map((item, i) => {
            return (
              <div className="airtable_item_prestaties">
                <div className="card_data grid_prestatie">
                  {item.fields.rank && <h2>{item.fields.rank}</h2>}
                  {item.fields.beschrijving && (
                    <p>{item.fields.beschrijving}</p>
                  )}
                  {item.fields.status && (
                    <p className="text_right">{item.fields.status}</p>
                  )}
                  <span>{item.model}</span>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
