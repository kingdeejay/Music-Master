import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null
    }
  }

  search(){
    console.log('this.state: ', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1' ;

    var accessToken = 'BQC07JNyTZSdIIcflDa0b8g2nRDR1T8gHQfbBTL0k3KRf48y7GhEMnxbDKKPT46qqmhyl4mV_kkTvbiAwCbJIu_F-vk7kCm1jJXE18lTG2Zz7eaFB2u663BQnbdPk91s2aE_-fFVJpMK7E1eDklW59oqeOL7jA_pCw'
    //var myHeaders = new Headers();
    //console.log('FETCH_URL', FETCH_URL);

    var myOptions = {
      method: 'GET',
      headers: {
          'Authorization':'Bearer' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => console.log(json))

  }
  render(){
    let artist = {
      name: '',
      followers: {
        total: ''
      }
    };
    if (this.state.artist !== null){
      artist = this.state.artist;
    }

    return(
      <div className="App">
        <div className="App-title"> Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value = {this.state.query}
              onChange = {event => {this.setState({query: event.target.value})}}
              onKeyPress = {event => {
                if (event.key === 'Enter'){
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick = {() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      <div className="Profile">
        <div>Artist Picture</div>
        <div>Artist Name</div>
      </div>
      <div className="Gallery">
        Gallery
      </div>
      </div>
    )
  }
}

export default App;
