import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './index.html?style=./home.css'

@WithRender
@Component
export default class IndexPage extends Vue {}
