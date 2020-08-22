import React from 'react';
import axios from 'axios';

const DataHOF = (url, WrappedComponent) =>
      class extends React.Component {

         constructor(props) {
             super(props);
             this.state = { data: [] };
             this.loadData = this.loadData.bind(this);
             
          }

          loadData() {
              axios.get(url)
                   .then(res => { 
                       this.setState({ data: res.data });
                    })
                   .catch(error => {
      		       console.log(error)
    	            })
          
          }
          
          resetData = () => {
              this.setState({ data: [] });
          }

          render() { 
   
              let button = <button onClick = {this.loadData}>LOAD DATA</button>;
              let content = <div></div>;
             
              if (this.state.data.length > 0) {
                 button = <button onClick = {this.resetData}>UNSET DATA</button>;
                 content = <WrappedComponent {...this.state} />;  
              }     
          
              return (   
                <div>
                  {button}
                  {content}
                </div>)           
          }
      }

export default DataHOF
