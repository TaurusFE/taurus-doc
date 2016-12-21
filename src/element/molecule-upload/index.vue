<template>
  <div>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Molecule Upload & Download</h2>
    </div>
    <div class="doc-compontent-box" id="download">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Download</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content" style="height: 200px">
            <div class="drop download-drop dropdown text-size--13" data-component="dropdown">
              <button class="button button--default button--small" role="button" data-toggle="dropdown">
                        <span class="button__label icon--right icon-arrow-down">
                            <span class="button__text">
                                Download bill
                            </span>
                        </span>
              </button>
              <div class="drop dropdown__content">
                <ul>
                  <li><a class="icon-excel">Download as CSV</a></li>
                  <li><a class="icon-excel">Download as XLSX</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="upload">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Upload</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content" style="height: 200px">
                <span class="attachment-add" data-selector="fileAdder">
                    <label>
                        <input type="file" name="attachments" class="js-hidden" data-selector="newFile">
                    </label>
                </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
