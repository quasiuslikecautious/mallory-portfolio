<script>
  import ContactItem from './ContactItem.svelte';
  import contact_methods from '$lib/ContactMethods.ts'

  const numMethods = contact_methods.length;
</script>

<div class="
  flex flex-col flex-nowrap space-y-4
  container shadow rounded-xl bg-secondary 
  min-w-96 h-fit p-4
">
  {#each contact_methods as method, i}
    <ContactItem
      name={method.name}
      value={method.value}
      faIcon={method.faIcon}
      faIconColor={method.faIconColor}
    />

    {#if i != numMethods - 1}
      <hr class="
        bg-gray-200
        h-0.5 w-full 
      " />
    {/if}
  {/each}
</div>
