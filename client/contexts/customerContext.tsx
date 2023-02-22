import { createContext, ReactNode, useState } from 'react';

type CustomerType= {
    page: string;
}

type PropsCustomerContextProvider = {
    children: ReactNode;
}

type PropsCustomerContext = {
    state: CustomerType;
    setState: React.Dispatch<React.SetStateAction<CustomerType>>;
}

const DEFAULT_VALUE = {
    state:{
        page:"overview",
    },
    setState: () => {}
}

const CustomerContext = createContext<PropsCustomerContext>(DEFAULT_VALUE);

const CustomerContextProvider: React.FC<PropsCustomerContextProvider> = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state);
    return (
      <CustomerContext.Provider
        value={{
          state,
          setState,
        }}
      >
        {children}
      </CustomerContext.Provider>
    );
  };

export { CustomerContextProvider }

export default CustomerContext;
