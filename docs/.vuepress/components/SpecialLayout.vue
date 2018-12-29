
<template>
  <div class="container">
    <header>
      <Content slot-key="header"/>
      <h3>{{$frontmatter.title}}</h3>
    </header>
    <main>
      <Content/>
    </main>
    <footer>
      <Content slot-key="footer"/>
    </footer>
  </div>
</template>

<script>

export default {}
</script>

<style lang="scss" scoped>
.container{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  .header{
    color: pink;
  }
  .footer{
    color: palegreen;
  }
}
</style>
