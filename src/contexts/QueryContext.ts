import React from "react";

interface QueryType {
  filters: string[];
  addFilter: (filter: string) => void;
}

export const QueryContext = React.createContext<QueryType>({
  filters: [],
  addFilter: () => {},
});
