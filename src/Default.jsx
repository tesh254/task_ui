import React from "react";
import { Redirect } from "react-router-dom";

export default () => <Redirect to="/tasks?page=1&limit=5" />;
