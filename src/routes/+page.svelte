<script>
  import { onMount } from 'svelte';

  import DesktopView from '$lib/components/DesktopView.svelte';

  let mobileView = false;

  function checkMobileView() {
    mobileView = window.screen.width <= 640;
  }

  onMount(() => {
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
  });
</script>
  
<DesktopView />
