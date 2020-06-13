import React from "react";
import { connect } from "react-redux";
// import { v4 as uuidv4 } from "uuid";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  componentDidMount() {
    console.log(this.props);
    let { userName } = this.props.match.params;

    let item = this.props.data.find(item => item.userName === userName);

    // this.setState(
    //   {
    //     ...item
    //   }
    // );
    console.log(item, "aj");
  }
  render() {
    return <div>Ashok</div>;
  }
}

const mapStateToProps = state => ({
  data: state.users
});
// const mapDispatchToProps = dispatch => ({
//   editFromCart: payload => dispatch(editFromCart(payload))
// });

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(UsersList);
