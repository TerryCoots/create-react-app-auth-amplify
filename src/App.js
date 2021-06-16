import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <script type="text/javascript">
          (function(w, d, x, id){
          s=d.createElement('script');
          s.src='https://dend6g4sigg57.cloudfront.net/amazon-connect-chat-interface-client.js';
          s.async=1;
          s.id=id;
          d.getElementsByTagName('head')[0].appendChild(s);
          w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
          })(window, document, 'amazon_connect', 'd69f341f-0460-47d2-8b90-4b8bc411a59d');
          amazon_connect('styles', { openChat: { color: 'white', backgroundColor: '#123456'}, closeChat: { color: 'white', backgroundColor: '#123456'} });
          amazon_connect('snippetId', 'QVFJREFIZ25JVzc0R0xQTVpWSlI0RjdyVlBselRRYnQzeW5TZEVnWGFmQnNNZ0lXbmdFc0Z2VUNVRW1jc0xVTXIyNVN0UW9mQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNWUJRTHowQ2dTNHdrTlVtL0FnRVFnQ3VMQXQrVjRJd3g0d0lBSEdvMDNxSHpWOFBlM2t6VlUvQ25pYXhFTVVRd2R3RmJvM2UrZ3BML1dVQjU6OmU2cEV6WFJCTHZrRXRUaTllWkoxd2d4R1lvUEtJZEpQSnQ4SWp6MGl6bitTMGVnVWRvRjFaQ0x0em9OSno1MXFhRjJFcFVqUnkrNTNoQWtWK1VSY0I2VThSQytwWm5wa3hCVjA5V08xaVpBbktaeUdDRERLdk5paXJwK1hIOUMyUUFNTnY2NmIzWE1PdGN1NWNBVEdMZk9MWlNGTVIxWT0=');
          </script>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
