<Tailwindcss />
<Header />
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a
    > to learn how to build Svelte apps.
  </p>
</main>

<script lang="ts">
import Tailwindcss from './Tailwindcss.svelte'
import Header from './components/Header.svelte'

export let name: string
</script>

<!-- style は常に scoped として扱われる -->
<style>
</style>
