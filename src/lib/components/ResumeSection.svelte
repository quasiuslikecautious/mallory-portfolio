<script>
  import { base } from '$app/paths';
  import Fa from 'svelte-fa';

  import { faDownload } from '@fortawesome/free-solid-svg-icons';

  import SectionHeading from '$lib/components/SectionHeading.svelte';
</script>

<div id="resume-section">
  <SectionHeading>
    Resume
  </SectionHeading>

  <div class="
    flex flex-row flex-nowrap justify-center
    mb-8
    text-secondaryText
  ">
    <a
      href="{base}/resume.pdf"
      download="Mallory_Ellis_Resume.pdf"
      class="
        flex flex-row justify-center items-center space-x-2
        rounded-full bg-gradient-to-l from-teal-500 to-indigo-500
        w-fit px-6 py-4
        text-white
      ">
      <Fa icon={faDownload} />
      <p>Download Resume</p>
    </a>
  </div>

  <img
    src="{base}/resume.png"
    alt="Mallory Ellis Resume"
  >
</div>
