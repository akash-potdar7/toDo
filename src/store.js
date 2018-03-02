// Central state holding and managing file.
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: [{
            title: 'Todo A',
            project: 'Project A',
            done: false,
          }, {
            title: 'Todo B',
            project: 'Project B',
            done: true,
          }, {
            title: 'Todo C',
            project: 'Project C',
            done: false,
          }, {
            title: 'Todo D',
            project: 'Project D',
            done: false,
          }, {
            title: 'Todo E',
            project: 'Project E',
            done: false,
          }]
        },
    dumm: {testKey: 'DummValue'}
});