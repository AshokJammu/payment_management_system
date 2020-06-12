import React from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/action";
import { v4 as uuidv4 } from "uuid";
export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }
  render() {
    const { userName } = this;
    const { addUser, users } = this.props;
    // console.log(this.state.userName);
    return (
      <div style={{ padding: 50 }}>
        <input
          style={{ padding: 10 }}
          type="text"
          value={userName}
          name={userName}
          placeholder="username"
          onChange={e => this.setState({ userName: e.target.value })}
        />

        <br />
        <button style={{ padding: 10 }} onClick={() => addUser(this.state)}>
          AddProduct
        </button>

        <div style={{ marginTop: 30 }}>
          LIST OF USERs:
          {users &&
            users.map(item => <div key={uuidv4()}>{item.userName}</div>)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  addUser: payload => dispatch(addUser(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
