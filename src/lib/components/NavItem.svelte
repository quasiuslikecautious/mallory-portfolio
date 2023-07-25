<script>
  export let section;
  export let faIcon;

  import Fa from 'svelte-fa'

  import { activeTab } from '$lib/Stores.ts';

  const tabName = section.toLowerCase();
  const sectionLink = "#" + tabName;
  const tabId = tabName + "-tab";
  const displayText = tabName.charAt(0).toUpperCase() + tabName.slice(1);

  function setActiveTab() {
    activeTab.update(tab => section);
  }
</script>

<button 
  id={tabId}
  data-tabs-target={sectionLink}
  type="button"
  role="tab"
  aria-controls="navigation-tab"
  aria-selected={$activeTab == section}
  on:click={setActiveTab}
  class="
    flex flex-col items-center justify-center space-y-2
    bg-secondary
    w-full h-10
    text-text 

    md:rounded-lg
    md:w-20 md:h-20

    first:rounded-l-lg
    last:rounded-r-lg

    hover:bg-gradient-to-r hover:from-teal-100 hover:to-indigo-100

    aria-selected:bg-gradient-to-r aria-selected:from-teal-500 aria-selected:to-indigo-500
    aria-selected:text-white
  "
>
  <Fa icon={faIcon} size="lg" />
  <span class="
    hidden
    font-medium

    md:flex md:visible
  ">
    {displayText}
  </span>
</button>
