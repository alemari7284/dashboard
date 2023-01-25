import { TitleMaker } from '../../TitleMaker'
import { Banner } from './Banner'
import slack from '../../../../assets/slack.png'
import connected from '../../../../assets/connected.png'
import notion from '../../../../assets/notion.png'
import connect from '../../../../assets/connect.png'

export const Integration = () => {
  return (
    <div className="integrationWrapper">
      <TitleMaker
        className={'sidebarSectionTitle'}
        title={'Integration'}
        opts={[]}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'grey 1px 1px 3px',
          borderRadius: '10px',
          margin: '10px 55px',
        }}
      >
        <Banner
          image={slack}
          status={connected}
          text={
            'Integration involves identifying which components to integrate and how to get a reference.'
          }
        />
        <Banner
          image={notion}
          status={connect}
          text={
            'Integration involves identifying which components to integrate and how to get a reference.'
          }
        />
      </div>
    </div>
  )
}
