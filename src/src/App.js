import React, { Component }               from 'react';
import AppBar                             from 'material-ui/AppBar';
import {Tabs, Tab}                        from 'material-ui/Tabs';
import MuiThemeProvider                   from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButtom               from 'material-ui/FloatingActionButton';
import ContentAdd                         from 'material-ui/svg-icons/content/add';
import {teal900, teal300, teal100, teal50}from 'material-ui/styles/colors';
import {Menu, MenuItem}                   from 'material-ui/Menu';
import Divider                            from 'material-ui/Divider';
import DropDownMenu                       from 'material-ui/DropDownMenu';
import './App.css';

const size = 0;

var itens = {
  devedores: [
    'Henrique',
    'Amari',
  ],
  valor: [
    '100',
    '200',
  ]
}

const addContent = {
  position: 'absolute',
  width: 50,
  height: 50,
  bottom: 20,
  right: 20 + size,
  'color': teal50,
  'background-color': teal300
};

const buttonStyleTab = {
  'color': teal50,
  'background-color': teal300,
  width: '100%'
}

const menuItemStyle = {
  position: 'relative',
  'left': 0,
  'right': 0
}

const secundaryMenuItemStyle = {
  position: 'relative',
  'left': 0,
  'right': 0,
  'width': '100%'
}

const thirdMenuItemStyle = {
  position: 'relative',
  'left': 0,
  'rigth': 0, 
  width: '98.5%'
}

class App extends Component {

  constructor (props) {
    super(props);
    this.App = React.createRef();
    this.state = { 
      stateDividas: false
    };
    this.handleDividas = this.handleDividas.bind(this);

  };

  handleDividas() {
    this.setState(prevState => ({
      stateDividas: !prevState.stateDividas
    }));
    console.log("handleDividas");
    console.log(this.state.stateDividas);
  }

  componentDidUpdate() {
    console.log("Update");
    console.log(this.App.current);
  }

  componentWillReceiveProps() {
    console.log("Receive");
    console.log(this.App.current);
  }

  componentDidMount() {
    console.log("Mount");
    console.log(this.App.current.style);
  }

  render() {
    return (
      <div id="App" className="App" style = {{'margin-right': size, 'margin-left': size}} ref={this.App}>
        <MuiThemeProvider>
          <AppBar
            title = {'Life Planner'} 
            zDepth = {0}
            style = { buttonStyleTab }
            showMenuIconButton = {false}> </AppBar>          
          <Tabs>
            <Tab label = 'Previsões' buttonStyle={ buttonStyleTab }>
              <div>
                <Menu>
                  <MenuItem style={ menuItemStyle } onClick = { this.handleDividas }>
                    Dívidas
                    {this.state.stateDividas && <Menu style={thirdMenuItemStyle}>
                      <MenuItem style={secundaryMenuItemStyle}> Oloco </MenuItem>
                    </Menu>}
                  </MenuItem>
                  <Divider style={ menuItemStyle }/>
                  <MenuItem  style={ menuItemStyle }>

                  </MenuItem>
                  <Divider style={ menuItemStyle }/>
                </Menu>
              </div>
            </Tab>
            <Tab label = 'Sugestões' buttonStyle={ buttonStyleTab }>

            </Tab>
            <Tab label = 'Tarefas' buttonStyle={ buttonStyleTab }>

            </Tab>
          </Tabs>
          <FloatingActionButtom style = { addContent } backgroundColor = { teal300 }>
            <ContentAdd /> 
          </FloatingActionButtom>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
