import type { NextPage } from 'next'
import grains from '../api/Grains'
import Header from '../components/Header'
import DefaultLayout from '../components/Layouts/DefaultLayout'
import List from '../components/List'
import SandBox from '../components/SandBox'

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <DefaultLayout>
        <div className='flex'>
          <List arr={grains} />
          <SandBox />
        </div>
      </DefaultLayout>
    </div>
  )
}

export default Home
