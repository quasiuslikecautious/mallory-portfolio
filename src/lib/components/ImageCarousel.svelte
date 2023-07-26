<script>
  export let images;

  import { fade } from 'svelte/transition';

  import Fa from 'svelte-fa';
  import { faAngleLeft, faAngleRight, faCircle as faSolidCircle } from '@fortawesome/free-solid-svg-icons';
  import { faCircle as faRegularCircle } from '@fortawesome/free-regular-svg-icons';

  let carouselIndex = 0;

  function next() {
    carouselIndex = (carouselIndex + 1) % images.length;
  }

  function prev() {
    carouselIndex = (carouselIndex - 1) % images.length;
    if (carouselIndex < 0) {
      carouselIndex += images.length
    }
  }
</script>

<div class="
  relative
  w-full h-full
">
  <div class="
    w-80 h-80
  ">
    {#each [images[carouselIndex]] as i (carouselIndex)}
      <div class="
        flex justify-center items-center
        absolute top-0 left-0 w-full h-full
      ">
          <img
            transition:fade
            src={i.src} 
            alt={i.alt}
            class="
              max-w-[90%] max-h-[90%]
            "
          />
      </div>
    {/each}
  </div>

  <div
    id="carousel-overlay"
    class="
      text-text
    "
  >
    <div class="
        flex flex-row justify-between items-center
        absolute top-0 left-0 w-full h-full
    ">
      <button 
        on:click={prev}
        class="
          flex justify-center items-center
          rounded-full bg-secondary
          w-8 h-8
        "
      >
        <Fa icon={faAngleLeft} size="md" />
      </button>

      <button
        on:click={next}
        class="
          flex justify-center items-center
          rounded-full bg-secondary
          w-8 h-8
        "
      >
        <Fa icon={faAngleRight} size="md" />
      </button>
    </div>

    <div class="
      flex justify-center items-center space-x-1
      absolute -bottom-1 left-0 w-full
    ">
      {#each Array(images.length) as _, index (index)}
        {#if index == carouselIndex}
          <Fa icon={faSolidCircle} size="sm" />
        {:else}
          <Fa icon={faRegularCircle} size="sm" />
        {/if}
      {/each}
    </div>
  </div>
</div>
