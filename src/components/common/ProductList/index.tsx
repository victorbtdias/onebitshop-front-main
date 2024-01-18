import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { Product } from "../../../entities/Product";
import useAuth from "../../../hook/useAuth";
import favoriteService from "../../../services/favoriteService";
import ProductCard from "./ProductCard";

export interface ProductsListProps {
  products: Product[];
  handleGetProducts: Function;
}

const ProductList = ({ products, handleGetProducts }: ProductsListProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { token } = useAuth();

  const handleGetFavorites = async () => {
    if (!token) return;

    const res = await favoriteService.getFavorites();

    const isLiked = res.data.map((val: Product) => {
      return val._id;
    });

    setFavorites(isLiked);
  };

  const isFavorite = (product: Product) =>
    !!favorites.find((favorite) => (product._id === favorite ? true : false));

  useEffect(() => {
    handleGetFavorites();
  }, []);

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard data={item} favorite={isFavorite(item)} />
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item: Product) => item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
      onEndReached={() => {
        handleGetProducts;
      }}
    />
  );
};

export default ProductList;
