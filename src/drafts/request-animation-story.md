---
layout: $/layouts/post.astro
title: The request animation story 
description: 'As developers, we have a lot of fun stories about fails in programming, about wins and about knowledge that mark our career. The request animation frame is one of those stories of fun and completness as dev'
author: Jesus
tags:
  - trpc
  - nextjs
date: 2022-09-30T00:00:00.000Z
pubDate: 2022-09-30T00:00:00.000Z
---

<!-- # title

> A blog is just like having a long conversation with people, so it should make sense that things you enjoy talking about will be closely related to your passion. -->

<!-- ## Intro

-   A promise **statement**
-   A preview of what's to come -->

As developers, we have a lot of fun stories about fails in programming, about wins and situations where we learned a lot. The usage of request animation frame is one of those stories of fun and completness as dev since it saved a project feature.

<!-- ## Overview

-   A simple definition
-   Examples
-   Transition to the next section -->


According to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

>The requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback function which will be invoked before the repaint.



This is particularly useful for JavaScript-based animations since it avoids having to set timeouts or interval timers, which can introduce jankiness and stutter. By using requestAnimationFrame(), you can declaratively state when you need to update your animation, making your code more readable and maintainable. In addition, if the user's device is unable to keep up with your desired frame rate, requestAnimationFrame() will automatically throttle back how often it calls your callback function so that they are only called as fast as possible without introducing any noticeable jankiness."

:::note
Markdown and MDX files do not return identical `Astro.props` objects. See the MDX integration guide for [MDX properties exposed](/en/guides/integrations-guide/mdx/#exported-properties).
:::

<iframe src="https://codesandbox.io/embed/request-animation-frame-counter-1c6lnb?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="request animation frame counter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<!-- ## Steps

-   Detail of each the steps -->

<!-- # Conclusion

-   Reminder of how helpful the guide is
-   Reiterate how important your topic is
-   Call-to-action -->



# References


[Flavio copes request animation frame](https://flaviocopes.com/requestanimationframe/)

[airman5573 codepen](https://codepen.io/YOONBYEONGIN/pen/RwxrEPN#fromHistory)

<!-- # Checklist -->

<!-- Inspiration ⛅

-   Read articles and watch videos that inspire me
-   Brainstorm the topics that I want to write about in bullet points
-   Reorder those bullet points to create a line of thought

Draft ✏️

-   Expand those bullet points into sentences/text
-   Go over the document

Ready to Publish 🌐

-   Draft 5 titles and pick one
-   Revise the complete text for typos
-   Preview the text
-   Publish or schedule the post
-   Promote on social media -->
