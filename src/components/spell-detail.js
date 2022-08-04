import React, { Component } from "react";

export default class SpellDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spelldetail: {},
    };
  }


//   getSpellDetail() {
//     axios
//       .get(
//         `http://127.0.0.1:5000/spells/${this.state.spells}`,
        
//       )
//       .then((response) => {
//         this.setState({
//           spelldetail: response,
//         });
//       })
//       .catch((error) => {
//         console.log("get spelldetail error", error);
//       });
//     }
    
//   componentDidMount() {
//     this.getSpellDetail();
//   }






  render() {
    return <div>spellDetail</div>;
  }
}
