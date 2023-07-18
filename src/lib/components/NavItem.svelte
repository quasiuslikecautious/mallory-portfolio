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

<li 
  role="presentation"
  class="
    w-full

    first:rounded-l-lg
    last:rounded-r-rg
  "
>
  <button 
    id={tabId}
    data-tabs-target={sectionLink}
    type="button"
    role="tab"
    aria-controls="profile"
    aria-selected={$activeTab == section}
    on:click={setActiveTab}
    class="
      flex flex-col items-center justify-center space-y-2
      w-full h-10

      md:rounded-lg
      md:w-20 md:h-20

      {$activeTab == section ? 
        "bg-gradient-to-r from-teal-500 to-indigo-500 text-white"
        :
        "bg-secondary text-text hover:bg-gradient-to-r hover:from-teal-100 hover:to-indigo-100"
      }
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
</li>
