<script>
  export let name;
  export let value;
  export let link;
  export let color;
  export let faIcon;
  export let faIconColor;

  import Fa from 'svelte-fa'
</script>

<a
  href={link == '' ? 'javascript:void(0)' : link}
  class="
    flex flex-row space-x-4
    container shadow rounded-lg {color}
    mr-8 p-2

    dark:bg-transparent dark:border dark:border-solid dark:border-white

    {link == '' ? "cursor-default" : ''}
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
        text-text whitespace-nowrap {link != '' ? "underline" : ""}
      "
    >
      {value}
    </p>
  </div>
</a>
