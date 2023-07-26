<script>
  import SkillCard from '$lib/components/SkillCard.svelte';
  import skills from '$lib/Skills.ts';
</script>

<div class="
  flex flex-row flex-wrap justify-between
">
  {#each skills as skill}
    <SkillCard
      title={skill.title}
      color={skill.color}
      faIcon={skill.faIcon}
      faIconColor={skill.faIconColor}
      text={skill.text}
    />
  {/each}
</div>
