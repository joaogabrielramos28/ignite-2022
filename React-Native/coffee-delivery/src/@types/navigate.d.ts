export type CoffeeParams = {
  id: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Catalog: undefined;
      Cart: undefined;
      Finish: undefined;
      Coffee: CoffeeParams;
    }
  }
}
