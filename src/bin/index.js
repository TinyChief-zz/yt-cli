#!/usr/bin/env node

const axios = require('axios')
const fetch = require('node-fetch')
const key =
  'trnsl.1.1.20170930T224025Z.8a7302c8b33408ae.1c5c05c81fa4ce28d4447ed98b202efa4c0a01f7'
// const lang = 'en-ru'
const langTo = getLang(process.argv[3])
const text = getText(process.argv[2])
const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&lang=${langTo}&text=${encodeURIComponent(text)}&format=plain`

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

function getText (str) {
  if (str.includes('text=')) {
    return str.slice(5)
  } else {
    return str
  }
}

function getLang (str) {
  if (!str) {
    return 'ru'
  }
  if (str.includes('lang=')) {
    return str.slice(5)
  } else {
    return str
  }
}

function getFlag (lang) {
  switch (lang) {
    case 'ru':
      return '🇷🇺'
    case 'en':
      return '🇬🇧'
    default:
      return '🇪🇺'
  }
}

axios.get(url)
  .then(res => {
    const result = `
    ${getFlag(res.data.lang.slice(0, 2))}  : ${text}
    ${getFlag(langTo)}  : ${res.data.text[0]}
    `
    console.log(result)
  })
  .catch(err => console.log(err))