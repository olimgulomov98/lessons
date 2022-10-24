import React from 'react'
import { About } from '../components/About'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Navbar } from '../components/Navbar'
import { Products } from '../components/Products'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { NotFound } from '../components/NotFound'

export const Root = () => {
    const location = useLocation()

    // console.log(new URLSearchParams(location.search).get('city'))
    console.log(window.location)
  return (
    <div>
        <Switch>
            <Route path='/' exact component={Navbar} />
            <Route path='/home' component={Navbar} />
            <Route path='/products' component={Navbar} />
            <Route path='/about' component={Navbar} />
            <Route path='/login' component={Navbar} />
        </Switch>

        <Switch>
            <Route path='/' exact >
                <Redirect to='/home' />
            </Route>
            <Route path='/home' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='*' component={NotFound} />   
        </Switch>
             
    </div>
  )
}
