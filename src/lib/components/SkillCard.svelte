<script>
  export let color;
  export let title;
  export let faIcon;
  export let faIconColor;
  export let text;

  import Fa from 'svelte-fa';
</script>

<div class="
  flex flex-row space-x-4 items-begin
  container shadow rounded-lg bg-opacity-50
  p-4 mb-8 mr-2 w-full 
  dark:bg-transparent dark:border dark:border-solid
  lg:w-72
  {color}
">
  <div>
    <Fa icon={faIcon} size="2x" fw primaryColor={faIconColor} />
  </div>
  <div class="
    mt-1
  ">
    <h3 class="
      mb-2 
      text-sm font-bold text-text
    ">
      {title}
    </h3>
    <p class="
      text-sm text-text leading-7
    ">
      {text}
    </p>
  </div>
</div>
