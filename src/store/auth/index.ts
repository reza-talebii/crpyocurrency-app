import {IUserInfo} from 'models/interfaces'
import create from 'zustand'


interface IStore {
    token?: string
    userInfo?: IUserInfo
    login: (token: string) => void
    setUserInfo: (user: IUserInfo) => void
    logout: () => void

}

const useAuthStore = create<IStore>(set => ({
    login: token => set(() => ({token: token})),
    setUserInfo: user => set(() => ({userInfo: user})),
    logout: () => set({token: undefined, userInfo: undefined}),
}))


export default useAuthStore
