<script>
  export let faIcon;
  export let faIconColor;
  export let ariaLabel;
  export let link;

  import Fa from 'svelte-fa';
</script>

<div class="
  flex flex-col items-center 
  container shadow rounded-lg bg-secondary
  w-fit
">
    <a
      href={link}
      target="_blank"
      aria-label={ariaLabel}
      rel="noreferrer nopener"
      class="
        flex flex-col items-center
        p-3
      "
    >
      <Fa icon={faIcon} primaryColor={faIconColor} />
    </a>
</div>
