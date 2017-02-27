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
  });

  const rule2: fela.TRule = (props: { size: string; }) => ({
    backgroundColor: 'red',
    padding: props.size,
    color: 'red'
  });

  const st = renderer.renderRule(rule, { size: '12px' })

  felaDOM.render(renderer, document.getElementById('fela-style'));

  const st2 = renderer.renderRule(rule2, { size: '16px' })

  debugger;
};