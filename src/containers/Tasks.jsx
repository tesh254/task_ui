import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import queryParser from "query-string";
import fetchTasks from "../redux/actions/tasks";

// Components
import TaskList from "../views/TaskView/TaskList";
import Pagination from "../components/commons/PaginationBtn";

class TasksContainer extends React.Component {
  static propTypes = {
    tasks: PropTypes.array,
    isLoading: PropTypes.bool,
    page: PropTypes.number
  };

  static defaultProps = {
    tasks: [],
    isLoading: true,
    page: 1,
  };

  state = {
    limit: 5,
    page: 1
  }

  componentDidMount() {
    const {
      fetchTasks,
      location: { search }
    } = this.props;

    const paginationValues = queryParser.parse(search);

    const page = parseInt(paginationValues.page, 10);
    const limit = parseInt(paginationValues.limit, 10);

    fetchTasks(page || 1, limit || 5);
  }

  handlePrevChange = () => {
    const { limit } = this.state;
    const {
      location: { search }
    } = this.props;

    const paginationValues = queryParser.parse(search);

    const page = parseInt(paginationValues.page - 1, 10);

    window.location.href = `/tasks?page=${page}&limit=${limit}`;
  };

  handleLimitChange = e => {
    this.setState({
      limit: parseInt(e.target.value, 10)
    });
  };

  handleNextPage = () => {
    const { limit } = this.state;
    const {
      location: { search }
    } = this.props;

    const paginationValues = queryParser.parse(search);

    const page = parseInt(paginationValues.page, 10);

    window.location.href = `/tasks?page=${page + 1}&limit=${limit}`;
  };

  handlePageChange = (e) => {
    this.setState({
      page: e.target.value
    })
  }

  render() {
    const { tasks, isLoading, page } = this.props;
    return (
      <section>
        {isLoading ? (
          <span>LOADING...</span>
        ) : tasks.length === 0 ? (
          <span className="title is-5">No tasks</span>
        ) : (
          <TaskList tasks={tasks} />
        )}
        <section
          style={{ display: "flex", justifyContent: "center", margin: "15px" }}
        >
          <Pagination
            handleLimitChange={this.handleLimitChange}
            handleNextPage={this.handleNextPage}
            handlePrevPage={this.handlePrevChange}
            firstPage={page === 1 ? true : false}
          />
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  isLoading: state.task.isLoading,
  page: state.task.page
});

export default withRouter(
  connect(mapStateToProps, { fetchTasks })(TasksContainer)
);
