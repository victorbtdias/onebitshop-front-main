import React, { useEffect, useState } from "react";
import { Container, NoResult } from "./styled";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import ProductList from "../../components/common/ProductList";
import { Product } from "../../entities/Product";
import searchService from "../../services/searchService";
import Loader from "../Loader";
import Filters from "../../components/Search/Filters";
import { QueryContext } from "../../contexts/QueryContext";

type Props = NativeStackScreenProps<PropsNavigationStack, "Search">;

const Search = ({ route }: Props) => {
  const [filters, setFilters] = useState<string[]>([]);
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const query = route?.params.query;

  let joinedFilters = filters.join("&");

  const handleSearch = async () => {
    const { data } = await searchService.getSearchedProducts(joinedFilters);

    setData(data?.products);
    setLoading(false);
  };

  const addFilter = (filter: string) => {
    const newFilterParts = filter.split("=");

    const newFilters = filters.map((f) =>
      f.startsWith(newFilterParts[0]) ? filter : f
    );

    if (!newFilters.includes(filter)) {
      newFilters.push(filter);
    }

    setFilters(newFilters);
  };

  const resetFilter = () => {
    setFilters([query]);
  };

  const queryContextValue = {
    filters,
    addFilter,
    resetFilter,
  };

  useEffect(() => {
    setFilters([query]);
  }, [query]);

  useEffect(() => {
    joinedFilters && handleSearch();
  }, [joinedFilters]);

  return (
    <Container>
      <Header />
      <QueryContext.Provider value={queryContextValue}>
        <Filters />
      </QueryContext.Provider>
      {!loading ? (
        data.length <= 0 ? (
          <NoResult>Sua pesquisa não corresponde a nenhum produto</NoResult>
        ) : (
          <ProductList handleGetProducts={handleSearch} products={data} />
        )
      ) : (
        <Loader />
      )}
      <NavBar />
    </Container>
  );
};

export default Search;
