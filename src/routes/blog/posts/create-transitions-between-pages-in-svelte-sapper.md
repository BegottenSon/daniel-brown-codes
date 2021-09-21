---
layout: blog
title: Create Transitions Between Pages in Sapper/Svelte
slug: create-transitions-between-pages-in-svelte-sapper
picture: <img src='https://images.unsplash.com/photo-1519516225893-aab20a8bb923' alt='A building with clouds' width="100%" class="post-picture">
summary: I love seeing websites have a transition between pages while navigating through the site. When I found I can create transitions in Svelte, I immediately...
date: 2020-11-10
tags:
    - code
    - sapper
    - svelte
---

I love seeing websites have a transition between pages while navigating through the site. When I found I can create transitions in Svelte, I immediately learned how to add it to this site.

Thinking it was going to be a tough task to get transitions to work, I mentally prepared myself for the mission I was about to forego. Upon researching the how-to’s, I found it was really simple! 😅

  

## Let The Transition Begin
Within the `src/components` folder, I added a `Transition.svelte` component. In that component I had to begin with importing onMount and onDestroy from svelte and keeping it simple, I just imported the fade transition.

```
<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';

    onMount(() => { fadingIn = true; });

    onDestroy(() => { fadingOut = true; });

    let fadingIn = false;
    let fadingOut = false;
</script>
```

The `fadingIn , fadingOut` variable is created for triggering the transition. When the page is loaded, the function `onMount()` is called and the same in vice versa with `onDestroy()`. The simple function of changing the fading in and out variable to true activates the fade which we handle with the “Svelte-i-ness” setup below.
  
  

## A Div and a Slot That Let’s Us Rock
Now the surprisingly simple part I found was creating a `div` with the parameters needed for the fade and a `slot` for all of the pages to be inserted into once the pages are wrapped. This is how the code looks:

```
{#if fadingIn || fadingOut}

<div in:fade={{delay: 300, duration: 300}} out:fade={{duration: 300}} >
    <slot></slot>
</div>
        
{/if}
```

The if statement is setup to handle the variables I set earlier. Instead of creating a `transition:fade` inside the `div`, I went with `in:fade` and `out:fade` so I could have control of the effects onMount and onDestroy separately.

Without separating the in and out fade, I found that one page would fade in while the other is fading out, leading to the new page jumping up from the bottom after the old page finished fading out. To fix that, I placed a delay on the fade in so it would come in only after the old page was finished fading out. This gave it a smoother, more cohesive look. 😆 
  


## Styling is All Relative
The style section in the component is simply: 

```
<style>
    div {
        position: relative;
    }
</style>
```

This keeps everything in place for me.

> I found that if you have grid or flexbox going on in the `_layout.svelte` under the `<main></main>` tag, the transition will disrupt this styling for the pages due to  the pages no longer being the direct child of the main tag! A workaround would be to copy the styling done in the layout over to the transition component.  

  

## Each Page Becomes the Rave
Finish everything off by going to each page in under the `routes` folder and wrapping all of them with the transition component:

```
<Transition>
	//page contents here
</Transition>
```

Now click away on the nav section and enjoy the transitions in full effect! 