<template>
  <aside :class="{active:isOpenDrawer}">
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" v-on:click="toggleDrawer()">
        <span class="material-icons">double_arrow</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">account_balance</span>
        <span class="text">Stock Exchange</span>
      </router-link>

      <router-link class="button" to="/brokers">
        <span class="material-icons">business</span>
        <span class="text">Brokers</span>
      </router-link>

      <router-link class="button" to="/coins">
        <span class="material-icons">payments</span>
        <span class="text">Coins</span>
      </router-link>

      <router-link class="button" to="/taxation">
        <span class="material-icons">trending_up</span>
        <span class="text">Taxation</span>
      </router-link>
    </div>
  </aside>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AsideComponent',
    data() {
      return {
        isOpenDrawer: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.isOpenDrawer = !this.isOpenDrawer;
      },
    },
  });
</script>

<style scoped lang="scss">
  aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;
    .logo {
      margin-bottom: 1rem;

      img {
        width: 2rem;
      }
    }
    .menu-toggle-wrap {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;

      position: relative;
      top: 0;
      transition: 0.2s ease-out;

      .menu-toggle {
        transition: 0.2s ease-out;
        .material-icons {
          font-size: 2rem;
          color: var(--light);
          transition: 0.2s ease-out;
        }

        &:hover {
          .material-icons {
            color: var(--primary);
            transform: translatex(0.5rem);
          }
        }
      }
    }
    .text {
      opacity: 0;
      transition: 0.3s ease-out;
    }
    h3 {
      color: var(--grey);
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    .menu {
      margin: 0 -1rem;

      .button {
        display: flex;
        align-items: center;
        text-decoration: none;

        padding: 0.5rem 1rem;
        transition: 0.2s ease-out;

        .material-icons {
          font-size: 2rem;
          color: var(--light);
          transition: 0.2s ease-out;
        }
        .text {
          color: var(--light);
          transition: 0.2s ease-out;
        }
        &:hover {
          background-color: var(--dark-alt);
          .material-icons, .text {
            color: var(--primary);
          }
        }
        &.router-link-exact-active {
          border-right: 3px solid var(--primary);
          border-radius: 10px;
        }
      }
    }
    &.active {
      width: var(--sidebar-width);
      .menu-toggle-wrap {
        top: -3rem;
        .menu-toggle {
          transform: rotate(-180deg);
        }
      }
      h3, .button, .text {
        opacity: 1;
      }

      .button {
        .material-icons {
          margin-right: 1rem;
        }
      }
    }
    @media (max-width: 768px) {
      position: fixed;
      z-index: 99;
    }
  }
</style>
