<script>
	import '../app.postcss';
  import { onMount } from 'svelte'
  import initializeCanvas from '../backgroundAnimation.js'
  import DarkToggleButton from '$lib/components/DarkToggleButton.svelte'

  onMount(initializeCanvas);
</script>


<div id="page" class="relative p-4 min-h-screen flex flex-col max-w-6xl ml-auto mr-auto"> 
  <canvas 
    id="background" 
    class="fixed top-0 left-0 -z-1"
    style="z-index: -1;"
  />
 
  <main class="
    flex-1
    pt-24

    md:pt-32
  ">
    <slot />
  </main>

  <div id="dark-toggle" class="
    fixed bottom-2 right-2
  ">
    <DarkToggleButton />
  </div>

  
  <footer class="mt-4 text-text">
    © Mallory Ellis 2023
  </footer>
</div>
