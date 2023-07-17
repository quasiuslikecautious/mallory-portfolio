<script>
  import { onMount } from 'svelte';

  import { activeTab } from '$lib/Stores.ts';

  import NavBar from '$lib/components/NavBar.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';

  import AboutSection from '$lib/components/AboutSection.svelte';
  import PortfolioSection from '$lib/components/PortfolioSection.svelte';
  import ResumeSection from '$lib/components/ResumeSection.svelte';
  import SocialsSection from '$lib/components/SocialsSection.svelte';

  onMount(() => {
    activeTab.update(tab => 'about');
  })
</script>

<div class="
  flex flex-col items-center space-y-8
  relative
  md:flex-row md:items-start md:space-x-8 md:space-y-0
">
  <Sidebar />
  
  <div class="
    flex flex-col flex-nowrap items-end space-x-2
  ">

    <NavBar />
  
    <div class="
      container shadow border rounded-xl bg-primary 
      mx-auto p-8

      md:p-12
    ">
      {#if $activeTab == 'about'}
        <AboutSection />
      {/if}

      {#if $activeTab == 'resume'}
        <ResumeSection />
      {/if}

      {#if $activeTab == 'portfolio'}
        <PortfolioSection />
      {/if}

      {#if $activeTab == 'socials'}
        <SocialsSection />
      {/if}
    </div>    
  </div>
</div>

