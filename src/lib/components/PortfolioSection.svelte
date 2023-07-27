<script>
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import PortfolioCardList from '$lib/components/PortfolioCardList.svelte';
</script>

<div 
  id="portfolio-section"
  class="
    w-full
  "
>
  <SectionHeading>
    Portfolio
  </SectionHeading>

  <div class="
    mb-8
    text-secondaryText
  ">
    <p class="
      mr-auto mb-2
    ">
      Check out my previous projects below!
    </p>
  </div>

  <PortfolioCardList />

</div>
