import React, { FC } from 'react'
import { AuthProvider } from './auth'
import { LoadingProvider } from './loading'

// Provider Composer imports all Providers so that we can isolate related state
// All state is managed through state hooks in the individual providers
function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  )
}

export const ContextProvider: FC = ({ children }) => {
  return <ProviderComposer contexts={[<LoadingProvider />, <AuthProvider />]}>{children}</ProviderComposer>
}
