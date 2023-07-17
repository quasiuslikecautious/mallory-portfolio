<script>  
  import NavItem from './NavItem.svelte';
  import routes from '$lib/NavRoutes.ts' 
</script>

<nav class="
  container shadow rounded-lg border border-solid border-gray-100 bg-primary
  mb-4 w-full

  md:mb-8 md:w-fit 
">
  <ul
    id="nav-tab"
    data-tabs-toggle="#nav-tab-content"
    role="tablist"
    class="
      flex flex-row flex-nowrap space-x-0 justify-around
      px-4 py-2
      text-sm font-medium text-center

      md:items-end md:space-x-6
      md:px-8 md:py-6
    "
  >
    {#each routes as route, i}
      <NavItem
        section={route.section} 
        faIcon={route.faIcon} 
      />
    {/each}
  </ul>
</nav>
