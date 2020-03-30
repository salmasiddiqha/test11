import React from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';
import * as data from "./assets/data.json";

class App extends React.Component {
  dataItems;
  searchString;
  constructor (props) {
    super(props);
    // this.state = this.mapData(data);
    //console.log("data", data);
    this.state = {statusList: data.default.statusList, cardsList: data.default.cardsList};
    this.dataItems = {statusList: data.default.statusList, cardsList: data.default.cardsList};
    //console.log("data from json", this.state, this.dataItems);
  }

  getInputChanges(text) {
    console.log("filter name", text);
    if(!text)
    {
      return this.setState({statusList: data.default.statusList, cardsList: data.default.cardsList});
    }
    if(text && text.length > 3) {
      // this.searchString = text;
      // this.props.name = text;
      debugger;
      return this.setState({statusList: data.default.statusList, cardsList: this.dataItems.cardsList.filter(items=>items.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)});
    }
  }

  getStatus(text) {
    console.log('filter name', text)
    // debugger;

    switch (text) {
      case 'all201':
        console.log('in alll state', this.dataItems);
        this.setState({statusList: data.default.statusList, cardsList: this.dataItems.cardsList});
        break;

      case 'allOk_200':
        // console.log("all ok filter", this.dataItems.cardsList.filter(device => device.statusName === 'All Ok'));
        this.setState({statusList: data.default.statusList, cardsList: this.dataItems.cardsList.filter(device => device.statusId === 'allOk_200')});
        break;
    
      case 'thresholdError_401':
        this.setState({statusList: data.default.statusList, cardsList: this.dataItems.cardsList.filter(device => device.statusId === 'thresholdError_401')});
        break;

      case 'commErr_500':
        this.setState({statusList: data.default.statusList, cardsList: this.dataItems.cardsList.filter(device => device.statusId === 'commErr_500')});
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="container-fluid background-container whole-container">
        <div className="row">
          <div className="col-sm-3">
          </div>
          <div className="col-sm-6 mt-5 mb-2 text-center">
            <div className="btn-group btn-group-md button-group-background">
              {this.state.statusList.map(list => {
                console.log("each status", list);
                return (
                    <button type="button" disabled={list.onClick === false && list.isFilterable === false} key={list.statusName} className="btn button-group-toggle-border" onClick={() => this.getStatus(list.id)}>
                      {list.isFilterable === true && list.statusName === "All Ok" && (<i className="fa fa-check-circle-o done-color fa-lg" aria-hidden="true"></i>)}
                      {list.isFilterable === true && list.statusName === "Threshold Errors" && (<i className="fa fa-exclamation-triangle warning-color fa-lg" aria-hidden="true"></i>)} 
                      {list.isFilterable === true && list.statusName === "Communication Errors" && (<i className="fa fa-ban error-color fa-lg" aria-hidden="true"></i>)} 
                      &nbsp; {list.statusName}
                    </button>
                )
              })}
            </div>
          </div>
          <div className="col-sm-3 mt-5 mb-2 pr-5">
            <span className="has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="Search by Location/Device/Display"
              onChange={e => this.getInputChanges(e.target.value)}
              />
            </span>
          </div>
        </div>
        <hr className="solid divider-line"/>
  
        <div className="row py-5">
          <div className="col-sm-4">
            { this.state.cardsList.reverse(),
            this.state.cardsList.map(item => {
              console.log("item html", item.html);
                  return (
                    <div key={item.name} className="card card-color mt-3 mb-3">
                    <div key={item.name} className="card-body">
                      <table className="table table-borderless">
                      <ReactTooltip />
                        <thead>
                          <tr>
                            <th className="text-primary">Device Name</th>
                            <th className="text-primary">Device</th>
                            <th className="text-primary">Player</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-white">{item.name}</td>
                            {item.icon === 'Communication Errors' && (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Communication Error"></i></td>) }
                            {item.icon === 'All Ok' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="All Ok"></i></td>) }
                            {item.icon === 'Threshold Errors' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Threshold Error"></i></td>) }
                            {item.icon === 'Communication Errors' && (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Communication Error"></i></td>) }
                            {item.icon === 'All Ok' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="All Ok"></i></td>) }
                            {item.icon === 'Threshold Errors' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Threshold Error"></i></td>) }
                          </tr> 
                        </tbody>
                      </table>
                    </div>
                  </div>
                  )
                })}
           </div>

           <div className="col-sm-4">
            {
              this.state.cardsList.reverse(),
            this.state.cardsList.map(item => {
                  return (
                    <div key={item.name} className="card card-color mt-3 mb-3">
                    <div key={item.name} className="card-body">
                      <table className="table table-borderless">
                      <ReactTooltip />
                        <thead>
                          <tr>
                            <th className="text-primary">Device Name</th>
                            <th className="text-primary">Device</th>
                            <th className="text-primary">Player</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-white">{item.name}</td>
                            {item.icon === 'Communication Errors' && (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Communication Error"></i></td>) }
                            {item.icon === 'All Ok' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="All Ok"></i></td>) }
                            {item.icon === 'Threshold Errors' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Threshold Error"></i></td>) }
                            {item.icon === 'Communication Errors' && (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Communication Error"></i></td>) }
                            {item.icon === 'All Ok' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="All Ok"></i></td>) }
                            {item.icon === 'Threshold Errors' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Threshold Error"></i></td>) }
                          </tr> 
                        </tbody>
                      </table>
                    </div>
                  </div>
                  )
                })}
           </div>


           <div className="col-sm-4">
            {this.state.cardsList.reverse(),
            this.state.cardsList.map(item => {
                  return (
                    <div key={item.name} className="card card-color mt-3 mb-3">
                    <div key={item.name} className="card-body">
                      <table className="table table-borderless">
                      <ReactTooltip />
                        <thead>
                          <tr>
                            <th className="text-primary">Device Name</th>
                            <th className="text-primary">Device</th>
                            <th className="text-primary">Player</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-white">{item.name}</td>
                            {item.icon === 'Communication Errors' && (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Communication Error"></i></td>) }
                            {item.icon === 'All Ok' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="All Ok"></i></td>) }
                            {item.icon === 'Threshold Errors' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Threshold Error"></i></td>) }
                            {item.icon === 'Communication Errors' && (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Communication Error"></i></td>) }
                            {item.icon === 'All Ok' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="All Ok"></i></td>) }
                            {item.icon === 'Threshold Errors' &&  (<td> &nbsp; <i className={item.html} aria-hidden="true" data-tip="Threshold Error"></i></td>) }
                          </tr> 
                        </tbody>
                      </table>
                    </div>
                  </div>
                  )
                })}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
