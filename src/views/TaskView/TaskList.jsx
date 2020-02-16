import React from "react";
import moment from "moment";

const TaskList = props => {
  return (
    <div className="task-list">
      {props.tasks.map((item, i) => {
        return (
          <div key={i} className="task-item">
            <span className="task_id">{item.task_id}</span>
            <br />
            <span className="customer_details">
              Customer Name: {item.customer_first_name} {item.customer_last_name} | Gender:{item.gender}
              <br />
              Phone: {item.customer_phone}
            </span>
            <span className="personel-name">
              Agent ID: {item.agentId} {item.personnel_first_name}
            </span>
            <span className="status">Status: {item.status}</span>
            <span className="location">Location: {item.location}</span>
            <div className="comment">{item.comments}</div>
            <div className="more-details">
              <span className="reg">Registration: {item.registration}</span>
              <br />
              <span className="dates">CreatedAt: {moment(item.createdAt).format('LL')}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
