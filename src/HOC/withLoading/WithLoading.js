import React from 'react'
import Loading from '../../components/loading/Loading'

export default function WithLoading(Component) {
  return function WithLoadingComponent({isLoading, ...props}){
    if(!isLoading)
      return <Component {...props}/>
    else
      return <Loading />
  }
}
