import {MetricBase} from "../api/types";

export const getNameForMetric = (result: MetricBase, alias?: string): string => {
  const { __name__, ...freeFormFields } = result.metric;
  const name = alias || __name__ || `Query ${result.group} result`;

  if (Object.keys(result.metric).length === 0) {
    return name; // a bit better than just {} for case of aggregation functions
  }

  return `${name} {${Object.entries(freeFormFields).map(e => `${e[0]}: ${e[1]}`).join(", ")}}`;
};
