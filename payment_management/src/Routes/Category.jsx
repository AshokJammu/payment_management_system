import React from "react";
import { connect } from "react-redux";
import { addCategory } from "../redux/action";
import { v4 as uuidv4 } from "uuid";
export class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ""
    };
  }
  render() {
    const { categoryName } = this;
    const { addCategory, category } = this.props;
    // console.log(this.state.category, "state");
    return (
      <div style={{ padding: 50 }}>
        <input
          style={{ padding: 10 }}
          type="text"
          value={categoryName}
          name={categoryName}
          placeholder="categoryName"
          onChange={e => this.setState({ categoryName: e.target.value })}
        />
        <br />
        <br />
        <button
          className="btn btn-dark"
          style={{ padding: 10 }}
          onClick={() => addCategory(this.state)}
        >
          ADDCATEGORY
        </button>

        <div style={{ marginTop: 30 }}>
          {/* {category?.map(item => (
            <div key={uuidv4()}>
              {item.categoryName}
              {console.log(item.categoryName)}
            </div>
          ))} */}
        </div>

        <div className="card">
          <div className="card-header">CategoryList</div>
          {category?.map(item => (
            <ul className="list-group list-group-flush">
              <li className="list-group-item font-weight-bold" key={uuidv4()}>
                {item.categoryName}
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  category: state.category
});
const mapDispatchToProps = dispatch => ({
  addCategory: payload => dispatch(addCategory(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
