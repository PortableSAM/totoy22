import moment from "moment";

const TargetWt = moment()
  .subtract(1, "w")
  .format("YYYYMMDD");

export default TargetWt;
