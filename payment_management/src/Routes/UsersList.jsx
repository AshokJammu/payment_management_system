import React from "react";
import { connect } from "react-redux";
import AddTransaction from "../components/AddTransaction.js";
// import TotalBalence from "../components/TotalBalence.js";
// import { v4 as uuidv4 } from "uuid";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  componentDidMount() {
    console.log(this.props);
    let user = this.props.match.params;
    console.log(user);
    let item = this.props.data.find(item => item.userName === user.userName);
    console.log(item, "aj");
  }
  render() {
    // const { users } = this.props;
    return (
      <div>
        {/* <TotalBalence /> */}
        {/* <h1>{users.userName}</h1> */}
        <AddTransaction />
      </div>
    );
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
