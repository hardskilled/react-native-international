import { LanguagePack } from '../src/types/index.type'

export default <LanguagePack>{
    locale: 'en',
    meta: { // Shown in method getLanguages
        label: 'English',
    },
    translations: {
        hello: 'Hello!',
        hello_with_name: 'Hello {name}!',
    },
}
