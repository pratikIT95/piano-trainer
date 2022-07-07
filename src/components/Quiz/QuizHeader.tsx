import styled from 'styled-components'
import ArrowBack from 'remixicon-react/ArrowLeftFillIcon'
import { useContext } from 'react'
import { TrainerContext } from '../TrainerProvider'

const HeaderContainer = styled.div`
  width: 100%;
  height: 96px;
  background-color: #161616;
  text-align: center;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  align-items: center;
`

const BackIconContainer = styled.div`
  padding: 8px;
  width: 2em;
  height: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  margin-left: 32px;
`

const TimerContainer = styled.div`
  width: 2em;
  padding: 8px;
  height: 2em;
  background-color: clear;
  margin-right: 32px;
`

const QuizHeader = () => {
  const { setCurrentScreen } = useContext(TrainerContext)
  return (
    <HeaderContainer>
      <BackIconContainer
        title='Back to practice mode'
        onClick={() => setCurrentScreen?.('practice')}
      >
        <ArrowBack color='#1f1f20' />
      </BackIconContainer>
      <h1>Quiz Mode</h1>
      <TimerContainer />
    </HeaderContainer>
  )
}

export default QuizHeader