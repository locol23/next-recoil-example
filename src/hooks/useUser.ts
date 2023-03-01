import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { userState } from '../store'

export const useUser = () => ({
  user: useRecoilValue(userState),
  setUser: useSetRecoilState(userState),
  reset: useResetRecoilState(userState),
})
