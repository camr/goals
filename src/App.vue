<template>
  <header>
    <div class="group">
      <ui-toolbar brand="Goal Posts" flat hide-nav-icon
                  show-brand :show-brand-divider=false>
        <div slot="actions">
          <ui-icon-button
              type="clear" color="black" icon="more_vert"
              has-dropdown-menu dropdown-position="bottom right"
              :menu-options="menu" @menu-option-selected="menuClicked"
          ></ui-icon-button>
        </div>
      </ui-toolbar>
    </div>

    <ui-modal :show.sync="showSettings">
      <div slot="header">Settings</div>
      <ui-textbox label="Start Date" name="start"
                  type="text" placeholder="YYYY-MM-DD"
                  :validation-rules="date"
                  :value.sync="startEntry"
                  @changed="startChanged">
      </ui-textbox>
    </ui-modal>
  </header>

  <main id="app" class="app-container">
    <h1>Goal Posts</h1>
  </main>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        showSettings: false,
        start: new Date(),
        startEntry: '',
        menu: [
          {
            id: 'settings',
            text: 'Settings'
          }, {
            id: 'about',
            text: 'About'
          }, {
            id: 'help',
            text: 'Help'
          }
        ]
      }
    },

    methods: {
      menuClicked (item) {
        switch (item.id) {
          case 'settings':
            this.showSettings = true
            break
          default:
            console.log(`Not handling menu item "${item.id}"`)
        }
      },

      startChanged () {
        console.log(new Date(this.startEntry))
      }
    }
  }
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;
    height: 100%;
    margin: 0;
  }

  header {
    width: 100%;

    .ui-toolbar-brand {
      padding-left: 15px;
    }
  }

  .app-container {
    color: #2c3e50;
    width: 75vw;

    h1 {
      text-align: center;
    }
  }
</style>
