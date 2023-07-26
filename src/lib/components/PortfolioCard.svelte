<script>
  export let title;
  export let faIcon;
  export let faIconColor;
  export let responsibilities;

  import Fa from 'svelte-fa';

  import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
  import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

  import { activePortfolioTab } from '$lib/Stores.ts';

  const tabName = title.trim().toLowerCase().split(' ').join('_');

  function expandSection() {
    if (isCurrent()) {
      activePortfolioTab.update(tab => '');
    } else {
      activePortfolioTab.update(tab => tabName);
    }
  }

  function isCurrent() {
    return $activePortfolioTab == tabName;
  }
</script>

<div class="
  flex flex-col items-center content-center
  container shadow bg-secondary rounded-lg
  mb-8 w-full 

  dark:border dark:border-solid

  md:space-y-4
  md:rounded-lg
  md:p-2
">
  <button
    aria-controls="portfolio-tab"
    on:click={expandSection}
    class="
      flex flex-row justify-between items-center self-start
      w-full p-1
      text-text

      md:p-0
    "
  >
    <div class="
      flex flex-row space-x-4 justify-left items-center
    ">
      <div class="
        flex flex-col justify-around items-center content-center
        w-8 h-8 p-1
      ">
        <Fa icon={faIcon} primaryColor={faIconColor} size="lg" />
      </div>

      <h3 class="
        text-text text-sm font-bold
        md:text-lg
      ">
        {title}
      </h3>
    </div>

    <Fa icon={faAngleDown} size="lg" />
  </button>

  <div class="
    container bg-primary
    p-4 w-full

    md:rounded-lg

    {$activePortfolioTab == tabName ? '' : 'hidden'}
  ">
    <ul class="
      flex flex-col justify-left items-start space-y-2
    ">
      {#each responsibilities as r}
        <li class="
          flex flex-row items-center justify-left space-x-2
          text-text
        ">
          <Fa icon={faCircleCheck} size="sm" primaryColor="green"/>
          <span class="
            text-sm
          ">
            {r.text}
          </span>

          {#each r.icons as i}
            <Fa icon={i} size="sm" />
          {/each}
        </li>
      {/each}
    </ul>
  </div>

</div>
