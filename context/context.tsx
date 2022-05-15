import React, {createContext, useEffect, useState} from 'react';
interface ContextModel {
  basket: GrainModel[];
  addBasket: (product: GrainModel) => void;
  deleteGrain: (id: number) => void;
  clearBasket: () => void;
  setList: SetModel[] | [];
  deleteSet: (id: number) => void;
  addSet: (product: SetModel) => void;
  editSet: (id: number, product: SetModel) => void;
}
interface GrainModel {
  title: string;
  img?: string;
  description?: string;
  id: number
}
interface SetModel {
  grains: GrainModel[],
  title: string,
  id: number
}

const ProductsContext = createContext<Partial<ContextModel>>({});
const ContextProvider: React.FC = ({children}) => {

  const [ basket, setBasket ]   = useState<GrainModel[]>([]);
  const [ setList, setSetList ] = useState<SetModel[]>([]);
  
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
  const clearBasket = () => {
    setBasket([]);
  }
  // Set
  const addSet = (product: SetModel) => {
    const idx = setList.findIndex(item => item.id === product.id);
    const newArr = setList.filter(item => item.id !== product.id);
    const newProduct = {
      ...product
    }
    if ( idx !== -1 ) {
      let arr = newArr.slice(0)
      arr.splice(idx, 0, newProduct);
      setSetList(arr);
    }
    if ( idx === -1 ) {
      setSetList(prev => [...prev, product]);
    }
  };

  const deleteSet = (id: number) => {
    const newArr = setList.filter(item => item.id !== id);
    setSetList(newArr);
  };

  const editSet = (id: number, product: SetModel) => {
    deleteSet(id);
    addSet(product);
  }

  const value: ContextModel = {
    basket,addBasket,deleteGrain,clearBasket,
    setList,deleteSet,addSet,editSet
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ContextProvider, ProductsContext };