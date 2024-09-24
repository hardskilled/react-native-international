# React Native International

Flexible internalization of your React Native project with "i18next" library.
The [i18next](https://www.i18next.com/) library is used for the message format.

## Demo

* [App to send WhatsApp messages without adding to contacts.](https://play.google.com/store/apps/details?id=com.wdirect)

## Install

If your application on Expo:

```bash
npx expo install expo-localization
```

Use npm:

```bash
npm i react-native-international
```

Use yarn:

```bash
yarn add react-native-international
```

## Usage

The first step is to add language packs.

### Step 1. Create language packs

For first make directory `translations` and separate files for each language. 

##### translations/en.ts

```ts
export default <LanguagePack>{
    locale: 'en',
    meta: { // Shown in method getLanguages
        label: 'English',
    },
    translations: {
        hello: 'Hello!',
        hello_with_name: 'Hello {{name}}!',
    },
}
```

##### translations/ky.ts

```ts
export default <LanguagePack>{
    locale: 'ky',
    meta: { // Shown in method getLanguages
        label: 'Кыргызча',
    },
    translations: {
        hello: 'Салам!',
        hello_with_name: 'Салам {{name}}!',
    }
}
```

### Step 2. Initialize languages

Make initiator, for example, `translations/_i18t.ts`.

```ts
import { initialization } from 'react-native-international'
import { getLocales } from "expo-localization";

import enLang from './en'
import kyLang from './ky'

const localeFromPhone = async () => {
    // You can take saved language from storage here
    return getLocales()?.[0]?.languageCode ?? "en";
}

void initialization({
    defaultFallback: 'en',
    languages: [
        enLang,
        kyLang
    ],
    localeFromPhone,
    debug: true // i18next debug (optional)
})
```

Open `index.js`, `App.tsx`, or `app/_layout.tsx` and add languages initialization import.

```ts
import "./localization/_i18n"
```

If you want to set language immediately, you can use `localeFromPhone` handler

### Step 3. Use a hook

Use a webhook `useIntl` in a component that uses strings.

```tsx
import React from 'react'
import { View, Text } from 'react-native'
import { useIntl } from 'react-native-international'

export default ({ navigation }) => {
    const {
        t, // Instance i18next 
    } = useIntl()

    return (
        <View>
            <Text>{t('hello')}</Text>
            <Text>{t('hello_with_name', {name: 'Smith'})}</Text>
        </View>
    )
}
```

## Change language

There are several helper methods for working with languages.

```ts
const {
    t, // Instance format-message 
    locale, // Current locale string
    getLanguages, // Method to get locales with "meta" property from language pack and "selected" flag.
    changeLocale, // Method to change locale
} = useIntl()
```

### Property: locale

Return current locale.

```ts
console.log(locale) 
// Return "en"
```

### Method: getLanguages

Get languages method return array.

```ts
const {
    getLanguages, // Method to change locale
} = useIntl()

const languages = getLanguages()

console.log(languages)

// [{
//     locale: 'en',
//     selected: true,
//     meta: {
//          label: 'English' // Meta from language pack
//     }
// }, {
//     locale: 'ky',
//     selected: false,
//     meta: {
//          label: 'Кыргызча' // Meta from language pack
//     }
// }]
```

### Method: changeLocale

Will change the language. If suddenly the locale was not found, use the fallback locale or the last selected one.

```ts
const {
    changeLocale, // Method to change locale
} = useIntl()

changeLocale('ky')
```
