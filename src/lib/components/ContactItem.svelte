<script>
  export let name;
  export let value;
  export let faIcon;
  export let faIconColor;

  import Fa from 'svelte-fa'
</script>

<div class="
  flex flex-row space-x-4
  mr-8
">
  <div class="
    container shadow rounded-lg bg-primary
    w-fit h-fit p-4
  ">
    <Fa icon={faIcon} primaryColor={faIconColor} />
  </div>

  <div class="
    flex flex-col items-start
  ">
    <h6 class="
      text-xs text-text
    ">
      {name}
    </h6>
    <p class="
      text-text whitespace-nowrap
    ">
      {value}
    </p>
  </div>
</div>
