import React, {createContext, useEffect, useState} from 'react';

interface ContextModel {
  basket: GrainModel[];
  addBasket: (product: GrainModel) => void,
  deleteGrain: (id: number) => void
}

interface GrainModel {
  title: string;
  img?: string;
  description?: string;
  id: number
}

const ProductsContext = createContext<Partial<ContextModel>>({});
const ContextProvider: React.FC = ({children}) => {

  const [ basket, setBasket ]   = useState<GrainModel[]>([]);
  const [ setList, setSetList ] = useState<GrainModel[]>([]);

  // Grain
  const addBasket = (product: GrainModel) => {
    const idx = basket.findIndex(item => item.id === product.id);
    const newArr = basket.filter(item => item.id !== product.id);
    const newProduct = {
      ...product
    }
    if ( idx !== -1 ) {
      let arr = newArr.slice(0)
      arr.splice(idx, 0, newProduct);
      setBasket(arr);
    }
    if ( idx === -1 ) {
      setBasket(prev => [...prev, product]);
    }
  };
  const deleteGrain = (id: number) => {
    const newArr = basket.filter(item => item.id !== id);
    setBasket(newArr);
  };

  // Set

  const value: ContextModel = {
    basket,
    addBasket,
    deleteGrain
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ContextProvider, ProductsContext };