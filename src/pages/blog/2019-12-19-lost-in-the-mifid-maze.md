---
templateKey: blog-post
title: Lost in the MIFID Maze
date: 2017-07-17T09:10:00.000Z
description: >-
  Adaptable Tools' CTO reflects on the role of data management in addressing
  regulatory challenges
featuredpost: true
featuredimage: /img/coffee-gear.png
---
Compliance is right at the top of the financial services agenda. Whether its MiFID II, MiFIR, GDPR or Solvency2, regulatory requirements - and the associated ability to aggregate, analyse and report on multiple sources of dynamic data - are the main focus at present, with the relevant teams and budgets growing fast.

But this urgency does not seem to be impacting directly on UI development teams; new front-office applications or components, despite their wide usage, rarely incorporate any meaningful functionality that is useful from the regulatory perspective.

At our FinTech startup, Adaptable Tools, we believe this is a huge missed opportunity. Compliance is no longer an expensive and unnecessary extra, or something only risk teams need to worry about. Instead, it should be a prime design consideration in everything we build, so that specialist teams are supported across systems and operations.

AdaptableBlotter.JS delivers a fast, powerful, feature-rich, data agnostic HTML5 grid that provides - out of the box - all the cutting-edge searching, filtering, editing, exporting and styling functionality that financial and other advanced users have come to expect. But it also does more: it provides a suite of tools designed to help our users meet their compliance and regulatory requirements, and better manage their data.





Everything in AdaptableBlotter.JS is audited – every mouse click, every configuration change, every user action, every data update etc. Audit Log streams all these changes (as JSON objects) to an HTTP channel, interacting with the reporting tool of your choice. This provides the ability to run reports on all data changes, to view immediately what each user has done, to create alerts for when something critical has happened, or even to set up a data playback.

Of course, this does not – and should not - replace formal compliance software. But it does act as a vital, additional, first line of defence. See the video below where Audit Log reports a user has overridden a validation warning and made a suspicious cell edit.

Multiple Blotters

Aggregating data from multiple sources is vital in understanding your data from a compliance perspective. And the Adaptable Blotter excels in this, allowing you to easily to search, filter and report on very large data sets.

But it goes a stage further; it enables multiple blotters to sit side-by-side sharing data, updates, filters and events. And better still, it can additionally easily share data with other tools and widgets providing our users with a more comprehensive picture. So you could easily set up a single application containing multiple blotters each showing data from different sources - voice, email, chat, trade booking etc.

Calculated Columns

Calculated Columns are bespoke custom columns created at run-time. The value of the column is a mathematical Expression which can reference as many existing columns, and contain as many different mathematical operators (using this maths library) as is required. This Expression is stored in the user's settings.

The Calculated Column will update in real time as the values it references themselves change. This is particular useful for when you want to run Scenario or 'What If' Analysis, or view data from multiple historical columns.

The Adaptable Blotter is also best in class when it comes to exporting data from the grid to other sources. Our intuitive and powerful Export function allows you to send 'ranges' dynamically to a number of sources - CSV, Excel, Clipboard, Symphony chat, email etc.

The Regulatory Challenge

Regulation is going to be a critical challenge for some time to come. Our responsibility as UX designers is to build tools and components that contain functionality – like Audit Log – that will help our users to meet the regulatory challenge and to stay one step ahead. 