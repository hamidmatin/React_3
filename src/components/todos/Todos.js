import React, {useState, useEffect} from 'react'

export default function Todos() {
  const [firstName, setFirstName] = useState('Hamid')
  const [lastName, setLastName] = useState('Matin')

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  useEffect(()=>{
    console.log('Raise Effect for Mount and Update for each state')
    return () =>{
      console.log('Unmounting component or shouldComponent Update for each')
    }
  })

  useEffect(()=>{
    console.log('Raise Effect for Mount once')
    return () =>{
      console.log('Unmounting component once')
    }
  }, [])

  useEffect(()=>{
    console.log('Raise Effect for Mount and Update firstName state')
    return () =>{
      console.log('Unmounting component <<First Name>>')
    }
  }, [firstName])

  useEffect(()=>{
    console.log('Raise Effect for Mount and Update lastName state')
    return () =>{
      console.log('Unmounting component <<Last Name>>')
    }
  }, [lastName])

  const changeFirstName = ()=>{
    setFirstName('Reza')
  }
  const changeLastName = ()=>{
    setLastName('Izadi')
  }
  return (
    <div className='container py-4 '>
      <button onClick={changeFirstName}>Change First Name</button>
      <button onClick={changeLastName}>Change Last Name</button>

      <h2 className='text-center'>my Name is {firstName} {lastName}</h2>
      
    </div>
  )
}
