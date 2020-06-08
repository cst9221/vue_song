import Vue from 'vue'
import Router from 'vue-router'
import Curation from '@/components/Curation'
import Home from '@/components/Home'
import NoticeCreate from '@/components/NoticeCreate'
import NoticeDetail from '@/components/NoticeDetail'
import NoticeModify from '@/components/NoticeModify'
import Notice from '@/components/Notice'
Vue.use(Router)

export default new Router({
  mode: 'history', //url에 #제거
  routes: [
    {
      path: '/Curation',
      name: 'Curation',
      component: Curation
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/notice/create',
      name: 'create-notice',
      component: NoticeCreate
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    { // /notice/modify�� /notice/:nid�� ������ ���� ������޶���...
      path: '/notice/modify/:nid',
      name: 'modify',
      component: NoticeModify
    },
    {
      path: '/notice/:nid',
      name: 'detail',
      component: NoticeDetail
    }
  ]
})
