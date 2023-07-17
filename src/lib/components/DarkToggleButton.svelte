<script>
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
  import initializeCanvas from '../../backgroundAnimation.js';

  import Fa from 'svelte-fa';

  let darkMode = false;
  
  function toggleDark() {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    darkMode = !isDark;
    initializeCanvas(darkMode);
  }
</script>

<button
  class="
    rounded-full border border-solid bg-inverted
    p-4 
  "
  on:click={toggleDark}
>
  {#if darkMode}
    <Fa icon={faSun} size="lg" primaryColor="sandybrown" />
  {/if}

  {#if !darkMode}
    <Fa icon={faMoon} size="lg" primaryColor="goldenrod" />
  {/if}
</button>
