import moment from "moment";

const TargetWt = moment()
  .subtract(1, "days")
  .format("YYYYMMDD");

export default TargetWt;
