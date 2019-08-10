import React from 'react';
import axios from 'axios';

const DataHOC = url =>  WrappedComponent =>
      class extends React.Component {

         constructor(props) {
             super(props);
             this.state = { 
                 data: [] 
             };
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
              this.setState({
                  data: []
              });
          }

          render() { 
             
              return (   
                <div>
                  <WrappedComponent {...this.state} loadData={this.loadData} resetData={this.resetData} />
                </div>
              )

              
          }

      }

export default DataHOC
