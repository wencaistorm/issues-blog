<style scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

body {
  background-color: #fff;
}

.container {
  width: 980px;
  margin-right: auto;
  margin-left: auto;
}

.pagehead {
  background-color: #fafbfc;
  /* background-color: red; */
  padding-top: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e4e8;
}

.nav li {
  position: relative;
  top: 1px;
  display: inline-block;
}

.reponav-item {
  display: block;
  padding: 7px 15px 8px;
  color: #586069;
  white-space: nowrap;
  border: solid transparent;
  border-width: 3px 1px 1px;
  border-radius: 3px 3px 0 0;
}

.reponav-item .octicon {
  color: rgba(27, 31, 35, 0.3);
}

.reponav-item.selected {
  color: #24292e;
  background-color: #fff;
  border-color: #e36209 #e1e4e8 transparent;
}

.reponav-item.selected > .octicon {
  color: inherit;
}

.icon {
  font-size: 18px;
}
</style>
<template>
    <header class="pagehead">
        <div class="reponav container">
            <ul class="nav">
                <li>
                    <router-link to="/" class="selected reponav-item">
                        <Icon class="icon" type="home"></Icon>
                        <span>Home</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/issues" class=" reponav-item">
                        <Icon class="icon" type="ios-information-outline"></Icon>
                        <span>Issues</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </header>

</template>
<script>
import $ from "axios";
import marked from "marked";
export default {
  name: "myHeader",
  component: {},
  data: function() {
    return {
      isLoading: true,
      issue: {}
    };
  },
  beforeMount: function() {},
  methods: {
    toggle: function() {
    }
  }
};
</script>