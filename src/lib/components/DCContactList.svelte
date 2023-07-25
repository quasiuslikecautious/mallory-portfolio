<script>
  import ContactItem from './ContactItem.svelte';
  import contact_methods from '$lib/DigitalCardMethods.ts'
</script>

<div class="
  flex flex-col flex-nowrap space-y-4
  min-w-96 h-fit p-4
">
  {#each contact_methods as method}
    <ContactItem
      name={method.name}
      value={method.value}
      link={method.link}
      color={method.color}
      faIcon={method.faIcon}
      faIconColor={method.faIconColor}
    />
  {/each}
</div>
