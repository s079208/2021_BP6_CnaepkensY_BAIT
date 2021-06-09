import React from "react";

export default class Visnet extends React.Component {
  state = {
    loading: true,
    visnetState: null
  };

  constructor(props) {
    super(props);
    //this.addRecord = this.addRecord.bind(this);
  }

  async componentDidMount() {
    const url =
      "https://api.airtable.com/v0/appwF2fIxMtd5aWsq/azen/?api_key=keyiKLBibtNS6VRBi";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.records);
    this.setState({ visnetState: data.records, loading: false });
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
    if (this.state.loading || !this.state.visnetState) {
      return (
        <div>
          <h1> LOADING... </h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.addRecord}>+</button>
          {this.state.visnetState.map((item, i) => {
            return (
              <div className="airtable_item">
                <div className="card_data">
                  {item.fields.naam && <h1>{item.fields.naam}</h1>}
                  {item.fields.haaksoort && (
                    <p>Haaksoort: {item.fields.haaksoort}</p>
                  )}
                  {item.fields.drijvend && (
                    <p>Drijvend: {item.fields.drijvend}</p>
                  )}
                  {item.fields.kleur && <p>Kleur: {item.fields.kleur}</p>}
                  {item.fields.gewicht && <p>Gewicht: {item.fields.gewicht}</p>}
                  {item.fields.afmeting && (
                    <p>Afmeting: {item.fields.afmeting}</p>
                  )}
                  <span>{item.model}</span>
                </div>
                <div className="card_img">
                  <img
                    alt="vissoort"
                    src={item.fields.afbeelding[0].url}
                    width="50px"
                  />
                </div>
                <div className="card_bio">
                  {item.fields.omschrijving && (
                    <p>{item.fields.omschrijving}</p>
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
