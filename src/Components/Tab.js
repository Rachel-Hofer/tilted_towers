// import React, { Component } from 'react';
// import { Tab, Tabs } from 'reactstrap';

// class ControlledTabs extends Component {
//     constructor(props, context) {
//         super(props, context);

//         this.handleSelect = this.handleSelect.bind(this);

//         this.state = {
//             key: 1
//         };
//     }

//     handleSelect(key) {
//         alert(`selected ${key}`);
//         this.setState({ key });
//     }

//     render() {
//         return (
//             <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
//                 <Tab>
//                     SOLO
//                 </Tab>
//             </Tabs>
//         );
//     }
// }

// export default ControlledTabs;