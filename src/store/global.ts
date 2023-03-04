import create from 'zustand'

interface IStore {
  // theme: ThemesType
  loading: boolean
  lang: 'fa' | 'en'
  setLanguage: (lang: 'fa' | 'en') => void
  // setThemeMod: (theme: ThemesType) => void
}

const useGlobalStore = create<IStore>(set => ({
  // theme: ThemeModes.dark,
  direction: 'rtl',
  loading: false,
  lang: 'fa',
  setLanguage: (lang: 'fa' | 'en') => set(() => ({ lang: lang, direction: lang === 'en' ? 'ltr' : 'rtl' })),
  // setThemeMod: (theme: ThemesType) => set(() => ({ theme })),
}))

export default useGlobalStore
