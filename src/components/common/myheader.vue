<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light" fixed="top">
      <div class="container">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link class="nav-link" to="/megaminx">Megaminx</router-link></b-nav-item>
            <b-nav-item><router-link class="nav-link" to="/pyraminx">Pyraminx</router-link></b-nav-item>
            <b-nav-item><router-link class="nav-link" to="/clock">Rubik's clock</router-link></b-nav-item>
          </b-navbar-nav>
          <div class="dropdown-divider"></div>
          <b-navbar-nav class="ml-auto">
            <a href="https://github.com/roudai/wca-image-editor">Github</a>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
