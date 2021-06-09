import React from "react";

export default class Maadje extends React.Component {
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
      "https://api.airtable.com/v0/appwF2fIxMtd5aWsq/maadje/?api_key=keyiKLBibtNS6VRBi";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.records);
    this.setState({ maadState: data.records, loading: false });
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
    if (this.state.loading || !this.state.maadState) {
      return (
        <div>
          <h1> LOADING... </h1>
        </div>
      );
    } else {
      return (
        <div>
          <div className="filler_40"></div>
          {this.state.maadState.map((item, i) => {
            return (
              <div className="airtable_item">
                <div className="card_data">
                  {item.fields.naam && <h1>{item.fields.naam}</h1>}
                  {item.fields.regio && <p>Regio: {item.fields.regio}</p>}
                  {item.fields.rank && <p>Rank: {item.fields.rank}</p>}
                  {item.fields.regio && <p>Regio: {item.fields.regio}</p>}
                  {item.fields.favorietaas && (
                    <p>Top aas: {item.fields.favorietaas}</p>
                  )}
                  {item.fields.favorietvis && (
                    <p>Top vis: {item.fields.favorietvis}</p>
                  )}

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
          <div className="maadje_toevoegen">
            <h2>Zoek een maadje</h2>
            <div className="maadje_toevoegen_grid">
              <input placeholder="1254-5892-4256" />
              <button>+</button>
            </div>
          </div>
        </div>
      );
    }
  }
}
