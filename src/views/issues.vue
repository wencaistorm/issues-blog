<style scoped>
.article-item {
  margin: 20px 0;
  font-size: 1.3em;
}
.spin-container {
  display: inline-block;
  width: 200px;
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.post-link {
  font-size: 1.25em;
}
.post-description {
  font-size: 14px;
  color: #555;
}
.post-description h1,
.post-description h2 {
  font-size: 16px;
}
.label-name {
  color: #fff;
}
.post-label {
  display: inline-block;
  padding: 4px 6px;
  border-radius: 3px;
  vertical-align: middle;
  opacity: 1;
  margin-left: 7px;
}
/* .post-label:hover {
    opacity: 1;
} */
.post-mate {
  font-size: 0.75em;
  margin: 12px 0;
}
</style>
<template>
    <div class="index">
        <div class="spin-container" v-if="isLoading">
            <Spin fix></Spin>
        </div>
        <div class="page-content">
            <Row v-for="item in list" type="flex" justify="center" class="code-row-bg article-item">
                <Col span="20">
                    <article class="post">
                        <router-link v-bind:to="'/issues/' + item.number" class="post-link" >{{ item.title }}</router-link>
                        <div class="post-mate">
                            <time>{{ item.created_at.slice(0, 10) }}</time>
                            <a class="post-label" href="javascript:;" v-for="label in item.labels" 
                                v-bind:style="{ 'background-color': '#' + label.color }">
                                <span class="label-name" >{{ label.name }}</span>
                            </a>
                        </div>
                        <p class="post-description">
                            <span class="text" v-html="item.body.substring(0, 150)"></span>
                            <router-link v-bind:to="'/issues/' + item.number" class="post-link2">[继续阅读...]</router-link>
                        </p>
                    </article>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import $ from "axios";
import marked from "marked";
export default {
  data: function() {
    return {
      isLoading: true,
      list: JSON.parse(window.localStorage.getItem("issues")) || []
    };
  },
  beforeMount: function() {
    var vm = this;
    if (vm.list.length) {
        vm.isLoading = false;
        return;
    }

    //   $.get("https://api.github.com/repos/phodal/articles/issues")
    $.get("https://api.github.com/repos/fouber/blog/issues")
      // $.get("https://api.github.com/repos/facebook/react/issues")
      .then(resp => {
        resp.data.forEach(function(item) {
          item.body = marked(item.body);
        });
        vm.list = resp.data;
        vm.isLoading = false;
        window.localStorage.setItem("issues", JSON.stringify(resp.data));
      })
      .catch(err => {
        vm.handleError();
      });
  },
  methods: {
    handleError() {
      const title = "Error";
      const content = "数据获取失败！";
      this.$Modal.error({
        title: title,
        content: content
      });
    }
  }
};
</script>