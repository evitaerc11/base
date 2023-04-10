// import
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import AuthLayout from 'layouts/Auth.js'
import AdminLayout from 'layouts/Admin.js'
import Dashboard from 'views/Dashboard/Dashboard.js'
import Tables from 'views/Dashboard/Tables.js'
import SignIn from 'views/Pages/SignIn.js'

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon
} from 'components/Icons/Icons'
import { STORAGE } from 'constants/common'
import { getCookie } from 'utils'

const accessToken = getCookie(STORAGE.ACCESS_TOKEN)
export const dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: '/admin'
  },
  {
    path: '/login',
    name: 'Tables',
    icon: <StatsIcon color='inherit' />,
    component: SignIn,
    layout: '/auth'
  }
]


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        {accessToken ? (
          <Route path={`/admin`} component={AdminLayout} />
        ) : (
          <Redirect to='/auth/login' />
        )}
      </Switch>
    </BrowserRouter>
  )
}
export default Router
