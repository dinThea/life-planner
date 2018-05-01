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
import $                                  from 'jquery';
import './App.css';
import { List, ListItem } from 'material-ui';

const size = 0;

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
  position: 'absolute',
  'text-align': 'center',
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
  width: '100%'
}

class App extends Component {

  constructor (props) {
    super(props);
    this.App = React.createRef();
    this.state = { 
      stateDividas: false,
    };
    this.pessoas = [
      'Henrique',
      'Amari',
    ]
    this.dividas = [
        '100',
        '200',
    ]
    
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
      <div id="App" className="App" ref={this.App}>
        <MuiThemeProvider>
          <AppBar
            title = {'Life Planner'} 
            zDepth = {0}
            style = { buttonStyleTab }
            showMenuIconButton = {false}> </AppBar>          
          <Tabs>
            <Tab label = 'Previsões' buttonStyle={ buttonStyleTab }>
                <List style={ menuItemStyle }>
                
                  <ListItem style={ menuItemStyle } onClick = { this.handleDividas }>
                    Dívidas
                    {this.state.stateDividas && <List style={thirdMenuItemStyle}> 
                      {
                        $.each(this.dividas, (index, value) => {
                          <ListItem style={secundaryMenuItemStyle} onClick = { this.handleDividas }> { value } </ListItem>
                        })
                      }                          
                    </List>}
                  </ListItem>
      
                </List>
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
