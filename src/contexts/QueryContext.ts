import React from "react";

interface QueryType {
  filters: string[];
  addFilter: (filter: string) => void;
  resetFilter: () => void;
}

export const QueryContext = React.createContext<QueryType>({
  filters: [],
  addFilter: () => {},
  resetFilter: () => {},
});
