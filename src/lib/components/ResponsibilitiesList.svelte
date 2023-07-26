<script>
  export let responsibilities;

  import ResponsibilityColumn from "./ResponsibilityColumn.svelte";

  function splitIntoColumns(items) {
    const midIndex = Math.ceil(items.length / 2);

    const firstColumn = items.slice(0, midIndex);
    const secondColumn = items.slice(midIndex);

    return [firstColumn, secondColumn];
  }

  let [col1, col2] = splitIntoColumns(responsibilities);
</script>

<div class="
  flex flex-row justify-between items-start space-x-4
  w-full
">
  <ResponsibilityColumn items={col1} />
  <ResponsibilityColumn items={col2} />
</div>
