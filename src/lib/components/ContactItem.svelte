<script>
  export let name;
  export let value;
  export let link;
  export let color;
  export let faIcon;
  export let faIconColor;

  import Fa from 'svelte-fa'
</script>

{#if link == ''}
  <div
    class="
      flex flex-row space-x-4
      container shadow rounded-lg {color}
      mr-8 p-2
  
      dark:bg-transparent dark:border dark:border-solid dark:border-white
    "
  >
    <div class="
      w-8 h-8 p-2 ml-2
    ">
      <Fa icon={faIcon} primaryColor={faIconColor} size="lg" />
    </div>
  
    <div class="
      flex flex-col justify-center items-start
    ">
      <h3 class="
        text-xs text-text
      ">
        {name}
      </h3>
      <p
        class="
          text-text whitespace-nowrap
        "
      >
        {value}
      </p>
    </div>
  </div>
{:else}
  <a
    href={link}
    class="
      flex flex-row space-x-4
      container shadow rounded-lg {color}
      mr-8 p-2
  
      dark:bg-transparent dark:border dark:border-solid dark:border-white
    "
  >
    <div class="
      w-8 h-8 p-2 ml-2
    ">
      <Fa icon={faIcon} primaryColor={faIconColor} size="lg" />
    </div>
  
    <div class="
      flex flex-col justify-center items-start
    ">
      <h3 class="
        text-xs text-text
      ">
        {name}
      </h3>
      <p
        class="
          text-text whitespace-nowrap underline
        "
      >
        {value}
      </p>
    </div>
  </a>
{/if}
