import React from 'react';
import axios from 'axios';

const DataHOC = url => WrappedComponent =>
      class extends React.Component {

         constructor(props) {
             super(props);
             this.state = { data: [] };

             this.loadData = this.loadData.bind(this);
             this.resetData = this.resetData.bind(this);
          }

          loadData() {
              axios.get(url)
                   .then(res => {
                       const data = res.data;
                       this.setState({ data });
              })
          }
          
          resetData() {
              this.setState({ data: [] });
          }

          render() { 
   
              let button = <button onClick = {this.loadData}>LOAD DATA</button>;
              let content = <div></div>;
             
              if (this.state.data.length > 0) {
                 button = <button onClick = {this.resetData}>RESET DATA</button>;
                 content = <WrappedComponent {...this.state} />;  
              }     
          
              return (   
                <div>
                  {button}
                  {content}
                </div>)           
          }
      }

export default DataHOC
