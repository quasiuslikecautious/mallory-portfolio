<script>
  import { base } from '$app/paths';
  import Fa from 'svelte-fa';

  import { faDownload } from '@fortawesome/free-solid-svg-icons';
  import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

  import ContactList from '$lib/components/ContactList.svelte';
  import SocialIcon from '$lib/components/SocialIcon.svelte';
</script>

<div class="
  flex flex-col items-center space-y-4 
  container shadow border rounded-xl bg-primary
  relative min-w-96 w-fit h-fit px-4 py-8 mx-auto 
  text-center
">
  <div class="
    shadow rounded-xl bg-black
    absolute -top-24 h-48 w-48
  ">
    <img 
      src="{base}/headshot.jpg"
      alt="Mallory Ellis"
      class="rounded-xl"
    >
  </div>

  <div id="spacer" class="h-16" />

  <div>
    <h2 class="
      mb-1
      text-3xl text-text font-bold
    ">
      Mallory Ellis
    </h2>

    <p class="text-gray-500 whitespace-nowrap">
      Digital Marketing Professional
    </p>
  </div>

  <SocialIcon
    faIcon={faLinkedinIn}
    faIconColor=dodgerblue
    link="https://www.linkedin.com/in/mallory-ellis"
  />

  <ContactList />

  <a
    href="{base}/resume.pdf"
    download="Mallory_Ellis_Resume.pdf"
    class="
      flex flex-row justify-center items-center space-x-2
      rounded-full bg-gradient-to-l from-teal-500 to-indigo-500
      px-6 py-4
      text-white
    ">
    <Fa icon={faDownload} />
    <p>Download CV</p>
  </a>

</div>
