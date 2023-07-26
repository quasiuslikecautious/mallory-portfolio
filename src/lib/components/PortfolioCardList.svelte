<script>
  import PortfolioCard from '$lib/components/PortfolioCard.svelte';
  import works from '$lib/Portfolio.ts';
</script>

<div class="
  flex flex-col flex-nowrap justify-around
  w-full
">
  {#each works as work}
    <PortfolioCard
      title={work.title}
      faIcon={work.faIcon}
      faIconColor={work.faIconColor}
      responsibilities={work.responsibilities}
      samples={work.samples}
    />
  {/each}
</div>
