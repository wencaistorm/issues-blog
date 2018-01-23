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
        <div class="page-content" v-if="issue">
            <Row type="flex" justify="center" class="code-row-bg article-item">
                <Col span="20">
                    <article class="post">
                        <a class="post-link" v-bind:href=issue.number>{{ issue.title }}</a>
                        <div class="post-mate">
                            <time>{{ issue.created_at.slice(0, 10) }}</time>
                            <a class="post-label" href="javascript:;" v-for="label in issue.labels" 
                                v-bind:style="{ 'background-color': '#' + label.color }">
                                <span class="label-name" >{{ label.name }}</span>
                            </a>
                        </div>
                        <p class="post-description">
                            <span class="text" v-html="issue.body"></span>
                        </p>
                    </article>
                </Col>
            </Row>
        </div>
        <div class="spin-container" v-else>
            <Spin fix></Spin>
        </div>
    </div>
</template>
<script>
import $ from "axios";
import marked from "marked";
export default {
  data: function() {
    return {
      issue: ''
    };
  },
  mounted: function() {
    var vm = this;
    if (vm.issue) return;
    $.get( "https://api.github.com/repos/fouber/blog/issues/" + this.$route.params.id )
    .then(resp => {
      resp.data.body = marked(resp.data.body);
      vm.issue = resp.data;
    })
    .catch(err => {
      vm.handleError();
    });
  },
  methods: {
    handleError() {
      const title = "Error";
      const content = "数据获取失败！xxxx";
      this.$Modal.error({
        title: title,
        content: content
      });
    }
  }
};
</script>