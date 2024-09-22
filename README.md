# React Native International

Flexible internalization of your React Native project with "i18next" library. By default, it uses the locale of
the phone, but it is possible to change the language via the changeLocale method.
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

The first step is to add language packs

### Step 1. Create language packs

Make separate files for each language.

##### en.js

```ts
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
```

##### ky.js

```ts
export default <LanguagePack>{
    locale: 'ky',
    meta: { // Shown in method getLanguages
        label: 'Кыргызча',
    },
    translations: {
        hello: 'Салам!',
        hello_with_name: 'Салам {name}!',
    }
}
```

### Step 2. Initialize languages

Open `index.js` and add languages initialization before app render.

```ts
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'

// Import initialization
import {initialization} from 'react-native-international'

// Add locales
initialization([
    require('./en'),
    require('./ky')
])

AppRegistry.registerComponent(appName, () => App)
```

If you want to set default fallback language, you can use second argument

```ts
initialization([
    require('./en'),
    require('./ky')
], 'ky')
```

### Step 3. Use a hook

Use a webhook `useIntl` in a component that uses strings.

```tsx
import React from 'react'
import {View, Text} from 'react-native'
import {useIntl} from 'react-native-international'

export default ({navigation}) => {
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

There are several helper methods for comfortable working with languages.

```ts
const {
    t, // Instance format-message 
    locale, // Current locale
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
const languages = getLanguages()
console.log(languages)
// [{
//     locale: 'en',
//     selected: true,
//     label: 'English' // Meta from language pack
// }, {
//     locale: 'ky',
//     selected: false,
//     label: 'Кыргызча' // Meta from language pack
// }]
```

### Method: changeLocale

Will change the language. If suddenly the locale was not found, use the fallback locale or the last selected one.

```ts
changeLocale('ky')
```
