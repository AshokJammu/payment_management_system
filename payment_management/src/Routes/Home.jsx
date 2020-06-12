import React from "react";
import { connect } from "react-redux";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { users } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <select
          name="user"
          onChange={this.handleChange}
          id=""
          style={{ padding: 10, marginBottom: 10 }}
        >
          <option value="">None</option>
          {users.map(item => (
            <option key={item}>{item.userName}</option>
          ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

// const mapDispatchToProps = dispatch => ({
//   addUser: payload => dispatch(addUser(payload))
// });
export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(Home);
