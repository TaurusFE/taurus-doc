<script>
import {TEditor} from 'ai-taurus-desktop';

export default {
  components: {
      TEditor
    },
    data () {
      return {
        name: 'base-example',
        content: '<h2>I am Example</h2>',
        editorOption: {}
      };
    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor);
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor);
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor);
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor;
      }
    },
    mounted () {
      console.log('this is my editor', this.editor);
      setTimeout(() => {
        this.content = '<h1>i am changed!</h1>';
      }, 1800);
    }
};
</script>

<style>
.ql-container .ql-editor {
      min-height: 20em;
      padding-bottom: 1em;
      max-height: 25em;
    }

    .html {
      height: 9em;
      overflow-y: auto;
      border: 1px solid #ccc;
      border-top: none;
      resize: vertical;
    }
</style>

## TEditor组件

基于Quill的富文本组件。

### 基本用法

:::demo

```html
<div class="quill-editor-example">
  <!-- quill-editor -->
  <t-editor ref="myTextEditor"
                v-model="content"
                :config="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </t-editor>
  <div class="html ql-editor" v-html="content"></div>
</div>

<script>
import {TEditor} from 'ai-taurus-desktop';

export default {
  components: {
      TEditor
    },
    data () {
      return {
        name: 'base-example',
        content: '<h2>I am Example</h2>',
        editorOption: {}
      };
    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor);
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor);
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor);
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor;
      }
    },
    mounted () {
      console.log('this is my editor', this.editor);
      setTimeout(() => {
        this.content = '<h1>i am changed!</h1>';
      }, 1800);
    }
};
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| content | 默认的文本内容 | String | - | - |
| config | 富文本编辑器的配置参数 | Object | - | - |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| blur | 当元素失去焦点时触发该事件 | - |
| focus | 当元素获得焦点时触发该事件 | - |
| ready | 当元素加载完成时触发该事件 | - |
| change | 当内容发生变更时触发该事件 | - |

### 参考

更多API参考[Quill API][quill-doc]。

[quill-doc]: https://quilljs.com/docs/quickstart/
