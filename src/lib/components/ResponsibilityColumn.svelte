<script>
  export let items;

  import Fa from "svelte-fa";
  import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
</script>

<ul class="
  flex flex-col justify-left items-start space-y-2
  w-full
">
  {#each items as r}
    <li class="
      flex flex-row items-center justify-left space-x-1
      text-text

      md:space-x-2
    ">
      <Fa icon={faCircleCheck} size="xs" primaryColor="green"/>
      <span class="
        text-xs

        md:text-sm
      ">
        {r.text}
      </span>

      {#each r.icons as i}
        <Fa icon={i} size="xs" />
      {/each}
    </li>
  {/each}
</ul>
