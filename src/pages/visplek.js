import React from "react";
import "../app.css";

export default class Visplekken extends React.Component {
  state = {
    loading: true,
    vispl: null
  };

  constructor(props) {
    super(props);
    //this.addRecord = this.addRecord.bind(this);
  }

  async componentDidMount() {
    const url =
      "https://api.airtable.com/v0/appwF2fIxMtd5aWsq/visplekken/?api_key=keyiKLBibtNS6VRBi";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.records);
    this.setState({ vispl: data.records, loading: false });
  }

  addRecord = async (inputs) => {
    //fetch api template
    console.log(this);
    const response = await fetch(
      "https://api.airtable.com/v0/appwF2fIxMtd5aWsq/locatie/?api_key=keyiKLBibtNS6VRBi",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            naam: "Yoeri",
            omschrijving: "Is nen Bear",
            afbeelding: [
              {
                url:
                  "https://previews.123rf.com/images/roxanabalint/roxanabalint1312/roxanabalint131200148/24476498-demo-grunge-rubber-stamp-on-white.jpg"
              }
            ]
          }
        })
      }
    );
  };

  render() {
    if (this.state.loading || !this.state.vispl) {
      return (
        <div>
          <h1> LOADING... </h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.addRecord}>+</button>
          {this.state.vispl.map((item, i) => {
            return (
              <div className="airtable_item">
                <div className="card_data">
                  {item.fields.naam && <h1>{item.fields.naam}</h1>}
                  {item.fields.adres && <p>Adres: {item.fields.adres}</p>}
                  {item.fields.sfeer && <p>Sfeer: {item.fields.sfeer}</p>}
                  {item.fields.voornamelijk && (
                    <p>Voornamelijk: {item.fields.voornamelijk}</p>
                  )}
                  <span>{item.model}</span>
                </div>
                <div className="card_img">
                  <img
                    alt="visplaats"
                    src={item.fields.afbeelding[0].url}
                    width="50px"
                  />
                </div>
                <div className="card_bio">
                  {item.fields.omschrijving && (
                    <p>Omschrijving: {item.fields.omschrijving}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
