<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Si tu ne connais pas la CAF, ce site te montrera comme l'ignorance peut parfois être synonyme de délivrance.<br>
      Sinon, pour te faire plus de mal, voici leur site officiel : <br>
      <a href="http://www.caf.fr/" target="_blank" rel="noopener">CAF</a>
    </p>
    <h3>Classement des emails les plus spammés</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Podium</a></li>
    </ul>
    <h3>Découverte des emails inconnus du bataillon</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Match moi!</a></li>
    </ul>
    <h3>Historique des emails que j'ai précedemment spammés</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Moi, le spammeur de renom</a></li>

    </ul>
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
