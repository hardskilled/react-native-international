# React Native International

Flexible internalization of your React Native project with "format-message" library. By default, it uses the locale of
the phone, but it is possible to change the language via the changeLocale method.
The [format-message](https://www.npmjs.com/package/format-message) library is used for the message format.

## Demo

* [App to send WhatsApp messages without adding to contacts.](https://play.google.com/store/apps/details?id=com.wdirect)

## Install

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

```js
export default {
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

##### ru.js

```js
export default {
    locale: 'ru',
    meta: { // Shown in method getLanguages
        label: 'Русский язык',
    },
    translations: {
        hello: 'Привет!',
        hello_with_name: 'Привет {name}!',
    },
}
```

### Step 2. Initialize languages

Open `index.js` and add languages initialization before app render.

```js
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'

// Import initialization
import {initialization} from 'react-native-international'

// Add locales
initialization([
    require('./en'),
    require('./ru')
])

AppRegistry.registerComponent(appName, () => App)
```

If you want to set default fallback language, you can use second argument

```js
initialization([
    require('./en'),
    require('./ru')
], 'ru')
```

### Step 3. Use a hook

Use a webhook `useIntl` in a component that uses strings.

```jsx
import React from 'react'
import {View, Text} from 'react-native'
import {useIntl} from 'hooks/useIntl'

export default ({navigation}) => {
    const {
        t, // Instance format-message 
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

```js
const {
    t, // Instance format-message 
    locale, // Current locale
    getLanguages, // Method to get locales with "meta" property from language pack and "selected" flag.
    changeLocale, // Method to change locale
} = useIntl()
```

### Property: locale

Return current locale.

```js
console.log(locale) 
// Return "en"
```

### Method: getLanguages

Get languages method return array.

```js
const languages = getLanguages()
console.log(languages)
// [{
//     locale: 'en',
//     selected: true,
//     label: 'English' // Meta from language pack
// }, {
//     locale: 'ru',
//     selected: false,
//     label: 'Русский язык' // Meta from language pack
// }]
```

### Method: changeLocale

Will change the language. If suddenly the locale was not found, use the fallback locale or the last selected one.

```js
changeLocale('ru')
```
