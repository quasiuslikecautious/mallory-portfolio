<script>
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import SkillCardList from '$lib/components/SkillCardList.svelte';
</script>

<div id="about-section">
  <SectionHeading>
    About Me
  </SectionHeading>

  <div class="
    mb-8
    text-secondaryText
  ">
    <p class="
      mb-2
    ">
      I am a results-driven marketing professional with specialization in social media and digital marketing. I am passionate about leveraging my skills in marketing and communication to drive growth and create impactful campaigns. With a drive for excellence and a keen eye for innovation, I thrive in fast-pace environments that encourage creativity.
    </p>
  </div>

  <h2 class="
    text-center
    mb-4
    text-3xl text-text font-bold font-serif

    lg:text-left
  ">
    What I do!
  </h2>

  <SkillCardList />
</div>
