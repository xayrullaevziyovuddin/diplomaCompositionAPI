<template>
    <div>
      <div class="product">
        <img :src=" getProducts() .thumbnail" alt="" />
        <h1 class="">{{  getProducts() .brand }}</h1>
        <p class="">{{ getProducts().description }}</p>
        <p class="">Цена: ${{ getProducts().price }}</p>
        <p class="">Кол-во: {{ getProducts().stock }}</p>
        <p class="">Скидка: ${{ getProducts().discountPercentage }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from "../stores/products.js";
  const productStore = useProductStore();
  
  
  function getProducts() {
      return productStore.products.find((product) => product.id === productStore.id);
  }
  
  

  
  </script>
  