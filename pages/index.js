// import Head from 'next/head'
import { useState } from 'react'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Head from '../components/Head';

export default function Home() {
  const [title, setTitle] = useState('Cookie Stand Admin');
  const [branches, setBranches] = useState('0')
  const [path, setPath] = useState('/overview')
  const [page, setPage] = useState('overview')


  return (
    <div className = 'bg-green-100'>
      <Head title = {title} />
      <Header header={title} path={path} page={page} />
      <Main title = {title} setBranches = {setBranches} />
      <Footer branches={branches} />
    </div>
  )
  }