//https://console.firebase.google.com/

import * as fb from 'firebase';
import * as fela from 'fela';
import * as felaDOM from 'fela-dom';

export const init = () => {
  //firebaseTest();
  felaTest();
};

const firebaseTest = () => {
  const config = {
    apiKey: "AIzaSyAlM8ZQjMGh4-HhGVhTvmYSZp6NaEsQmXI",
    authDomain: "lm-rw-d4178.firebaseapp.com",
    databaseURL: "https://lm-rw-d4178.firebaseio.com",
    storageBucket: "lm-rw-d4178.appspot.com",
    messagingSenderId: "874593512524"
  };
  const app = fb.initializeApp(config, 'db');

  const db = app.database();
  db.ref('root/data1').set({
    fld1: 'fld1',
    fld2: new Date().getTime()
  });
};

const felaTest = () => {
  const renderer = fela.createRenderer();

  const rule: fela.TRule = (props: { size: string; }) => ({
    backgroundColor: 'red',
    fontSize: props.size,
    color: 'blue'
  })

  renderer.renderRule(rule, { size: '12px' })
};