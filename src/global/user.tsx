import React, { FC, createContext, useContext, useState } from 'react';

export const initialUserValues = {
  sessionId: '',
};

export const UserContext = createContext(initialUserValues);

export const UserProvider: FC = ({ children }) => {
  const [sessionId, setSessionId] = useState<string>(null!);

  return (
    <UserContext.Provider
      value={{
        sessionId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
