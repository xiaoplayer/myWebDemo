<template>
  <div class="hello">
    <BeMap arcgisApiUrl= 'http://192.168.3.8/arcgisjsapi' 
    mapServerUrl='http://192.168.3.8:6080/arcgis/rest/services/China/china/MapServer' />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
