---
templateKey: blog-post
title: 'True Digital Intelligence Needs Brains and Guts '
date: 2019-01-10T09:37:00.000Z
description: The body's ecosystem connects thinking and processing
featuredpost: false
featuredimage: /img/brain_gut.png
tags:
  - gridgurus
---
_Lucy Watson at  Cyoda with Adaptable Tools' CEO Danielle Nagler considers the true challenge of Big Data_

In the world of medicine, the gut is BIG news. Over the last decade, our gut ‘biome’ (the 100 trillion or so bacteria populating the adult digestive tract) has been implicated in virtually every conceivable physical and mental health condition, including obesity, Alzheimers, heart disease and anxiety. Alongside those 100 trillion or so bacteria is a vast network of neurons, more extensive than the entire spinal cord, forming a delicate, inter-dependent ecosystem, which is now widely thought of as the body’s ‘second brain’.

In the world of technology, something similar is at play. We tend to overlook the ‘guts’ of our IT architecture because we can’t see it or directly interact with it. We focus instead on the front-end which confronts us on a daily basis. It’s the intelligent face where we can do sexy analysis, develop actionable insights, seek out meaning. Meanwhile the back-end is out of sight and out of mind, something we prefer to leave to the techies.

But just as we’re learning that obesity can be determined more by gut microbes than your willpower and that even depression maybe as much a result of the gut as the brain, so we need to start paying more attention to that equally unsexy infrastructure that underpins our Tech.

It’s this that sits beneath the brick walls you may be hitting:

•	A great analysis tool, that you’d like to use more extensively, but IT says it’s impossible/ridiculously expensive to extend the scope of data within it?

•	Seemingly trivial change requests attracting an eye-watering price tag?

•	Unable to run a report/query on the full volume/scope of data that you’d like because it’s too slow/ computationally onerous?

•	Inability to run analysis ‘as-at’ a historical point in time?

•	An overnight batch run that’s so full that IT tell you they can’t squeeze in another report within the available time window?

•	Weird results because the way your data flows across your services has changed in unknown ways and people mumble things about transactions and consistency?

If these scenarios seem familiar, the problem lies in your back-end. And it’s pretty much impossible to use clever front-end technology to find a way through.

We read a great deal about the potential of AI, big data, decision analytics & the like to re-imagine the landscape of pretty much every industry. Yet we know that, the failure rates are high. Of course there are multiple reasons for these scary statistics, but put simply, investing in leading edge front-end tools without first sorting out the legacy data infrastructure, is a bit like fitting a turbo-charger to a horse & cart and assuming it will transform to a rocket.

So what makes a great back-end?

Of course this will depend somewhat on the context and the following list may be somewhat biased towards Financial Services (the sector I know best), but there would be many similarities across many operational environments:

Scaleable

Do you want tech that can only support your business growth up to a certain point? Or where costs mushroom disproportionately beyond a threshold data volume? Probably not. The rate of data collection is growing exponentially within virtually every industry; Are you confident you won’t reach these limits within the expected lifespan of any technology you’re bringing in today?


And what does ‘scalable’ actually mean anyway? (More detailed post on this to come shortly). You will find it used liberally in the marketing materials of pretty much any vendor out there. But caveat emptor; many systems are in fact partially scalable. In other words, bits of them are able to infinitely grow the volume of data they handle, given a proportional increase in computing power, but elsewhere they contain bottlenecks. Getting a good handle on where these are and how they may impact your business is vital.

Fast

This one needs little commentary - but in general, once you want to do high volume, complex or computationally onerous analysis, this will need to be done in the back-end of any system and accessed in the front-end via API. The only hard and fast rule is that demands on your technology in terms of data volumes, complexity and user expectations will grow faster than you can possibly imagine. In a data-hungry world that feeds off faster & better, are you confident your technology can continue to deliver the controls and insights you will need in the future?

Easy to integrate

The longer your business has been around, and the more successful you have been, the more legacy systems you’re going to have. At a typical investment bank this can run into the hundreds or even thousands, creating tens of thousands of interfaces between these systems.

Every single system update knocks on to these interfaces, creating an entire industry of data integration effort, employing reams of highly paid analysts. In part, this industry is a byproduct of system proliferation, so if you remove the scalability constraint and open up a path towards fewer systems doing more things with more data, you’re on the right track.

But it’s also possible to take a leaner approach to data integration itself. Under the classic model, data is translated from system A to system B, based on point-in-time view of what is likely to be required in the future by system B. In reality, much of the translated data is never used, or itself changes before the need arises. Thus a great deal of translation effort goes to waste. A far more efficient alternative is to store all system A’s data ‘as-is’ (together with a schema describing each field) and then configure the translations on an ‘as-required’ basis - e.g. to configure a specific new report or enable a specific type of analysis. - Technically speaking, this is referred to as ‘schema-agnostic’ data modelling, but I like to think of it evolving from a ‘Just-in-case’ to ‘Just-in-Time’ approach to provisioning data.

Reliable

This means a back-end that delivers what it’s supposed to, with the minimum of human intervention. It’s the opposite of what we see in many financial institutions today in which vast operational teams are needed to oil and polish the delicate and intricate machinery with endless manual handling of errors, exceptions and re-runs.

Frustratingly, it’s a requirement that gets trickier if you also want scalability. If you distribute an onerous computation across multiple machines to make it run faster, what happens if one fails? To maintain reliability you need a clever way of detecting that failed node, and automatically re-allocating the load. Of course, ideally this should happen ‘on-the-fly’, so that changes to availability or processing machines during the course of a computation never compromise the accuracy of the output.

Accurate

We also need to be able to rely on the data itself. Whilst the ‘garbage in’, ‘garbage out’ rule will always apply, it’s critical that our back-end cannot itself introduce inaccuracy, such as by partially uploading updates.

The old-fashioned relational database achieved this by ‘locking down’ all related data until a given update had been successfully uploaded. This approach worked fairly well, but at a cost of scalability as it creates a threshold beyond which you can’t speed up the rate at which data is up or downloaded. Thus a truly scalable architecture needs to have an alternative approach to ensuring data consistency. Many approaches to combining consistency and scalability involve a heinously complex architecture, which in turn compromise the desired attributes of speed and reliability. So if you’re someone who likes to buy and eat your cake, make sure your chosen technology can deliver everything your business needs without any hidden compromises.

Flexible

Going back to digestion, it’s been proven that our guts play a front-line role in our body’s immune defence. We’ve yet to work out the prescription for optimal performance, but we know that the more diverse the flora harbouring in our guts, the better shape we’ll be in to shake off whatever challenge our environment throws at us.

We also need an IT infrastructure that can rise to unexpected challenges...The fact is that a typical IT backbone will last 20,30 years - maybe more. That’s a horizon over which the only certainty is that your business will change in ways you can’t even imagine today.

To respond and stay ahead of the game, we need to be able swiftly to iterate, to build new capability at pace, to experiment and to adjust. This means we need a back-end that abstracts away the technical complexity and makes it easy build innovative new functionality rapidly, with only light technical involvement.

And what happens when you marry this with a great front-end?

Businesses, markets, industries are moving faster than ever. With the right front-end tools sitting on a robust back-end, you will be on the pulse of what’s going on internally and externally, ready to act swiftly. Within a few simple clicks a well-designed front-end will allow you craft your data with finesse to extract the information you need, whilst the back-end will do the heavy lifting behind the scenes.

There are efficiency and productivity gains too: Consolidating into one single, all powerful grid which combines the tools needed at the front-end to make use of data effectively saves time and money. In place of multiple different tools, each with separate licence fees, maintenance and training requirements, a unified front end enables rapid analysis and response across systems to the data flowing through them, allowing users to respond fast and appropriately to what data is really telling them.

This is why Cyoda, a leading provider of scalable back-end technology and Adaptable Tools, a market leading Data Grid for Financial institutions have chosen to work together. Moving and mining data in a fully integrated solution which can help firms use the past and present to make the future their own.
