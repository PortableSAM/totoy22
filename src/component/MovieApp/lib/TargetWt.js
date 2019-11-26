import moment from "moment";

const TargetWt = moment()
  .subtract(7, "days")
  .format("YYYYMMDD");

export default TargetWt;
