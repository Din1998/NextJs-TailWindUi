import Layout from 'Layouts/Layout'
import HeroUi from 'components/HeroUi'
import TextBox from 'components/TextBox'
import StatiBar from 'components/StaticBar'
import BestBodyBox from 'components/BestBodyBox'


export default function Home() {
  return (
    <>
      <Layout>
        <HeroUi /> 
        <TextBox />
        <StatiBar />
        <BestBodyBox />
      </Layout>
    </>
  )
}
