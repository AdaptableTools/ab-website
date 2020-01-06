---
templateKey: blog-post
title: Lost in the MIFID Maze
date: 2017-07-17T09:10:00.000Z
description: >-
  Adaptable Tools' CTO reflects on the role of data management in addressing
  regulatory challenges
featuredpost: false
featuredimage: /img/lost-in-the-mifid-maze.jpeg
tags:
  - gridgurus
---

Compliance is right at the top of the financial services agenda. Whether its MiFID II, MiFIR, GDPR or Solvency2, regulatory requirements - and the associated ability to aggregate, analyse and report on multiple sources of dynamic data - are the main focus at present, with the relevant teams and budgets growing fast.

But this urgency does not seem to be impacting directly on UI development teams; new front-office applications or components, despite their wide usage, rarely incorporate any meaningful functionality that is useful from the regulatory perspective.

At our FinTech startup, Adaptable Tools, we believe this is a huge missed opportunity. Compliance is no longer an expensive and unnecessary extra, or something only risk teams need to worry about. Instead, it should be a prime design consideration in everything we build, so that specialist teams are supported across systems and operations.

AdaptableBlotter.JS delivers a fast, powerful, feature-rich, data agnostic HTML5 grid that provides - out of the box - all the cutting-edge searching, filtering, editing, exporting and styling functionality that financial and other advanced users have come to expect. But it also does more: it provides a suite of tools designed to help our users meet their compliance and regulatory requirements, and better manage their data.

The incredibly effective Audit Log, Export, Calculated Columns and Multiple Blotter features can serve as an instructive model for how other UI components can address this critical area.

Audit Log

Everything in AdaptableBlotter.JS is audited – every mouse click, every configuration change, every user action, every data update etc. Audit Log streams all these changes (as JSON objects) to an HTTP channel, interacting with the reporting tool of your choice. This provides the ability to run reports on all data changes, to view immediately what each user has done, to create alerts for when something critical has happened, or even to set up a data playback.

Of course, this does not – and should not - replace formal compliance software. But it does act as a vital, additional, first line of defence. See the video below where Audit Log reports a user has overridden a validation warning and made a suspicious cell edit.
Audit Log is also invaluable from a support point of view. Picture the scene: a support call comes in and within a few seconds everything which that user has done over the previous few hours can be displayed in a report, and the problem immediately diagnosed without even needing to visit the user’s desk.

Multiple Blotters

Aggregating data from multiple sources is vital in understanding your data from a compliance perspective. And the Adaptable Blotter excels in this, allowing you to easily to search, filter and report on very large data sets.

But it goes a stage further; it enables multiple blotters to sit side-by-side sharing data, updates, filters and events. And better still, it can additionally easily share data with other tools and widgets providing our users with a more comprehensive picture. So you could easily set up a single application containing multiple blotters each showing data from different sources - voice, email, chat, trade booking etc.
In the video below we have 3 blotters, a chart widget and a news feed all sharing events. In this instance we have mocked up a trading scenario (with trade, positions and pricing blotters), but it could just as easily be multiple blotters displaying historical or reference or indeed any data that you provide.

Calculated Columns

Calculated Columns are bespoke custom columns created at run-time. The value of the column is a mathematical Expression which can reference as many existing columns, and contain as many different mathematical operators (using this maths library) as is required. This Expression is stored in the user's settings.

The Calculated Column will update in real time as the values it references themselves change. This is particular useful for when you want to run Scenario or 'What If' Analysis, or view data from multiple historical columns.
Calculated Columns also lend themselves to use-cases helpful from a regulatory perspective. For example, you could create a 'Best Ask' column which will show the lowest ask price from a number of different columns.
Dynamic Export

The Adaptable Blotter is also best in class when it comes to exporting data from the grid to other sources. Our intuitive and powerful Export function allows you to send 'ranges' dynamically to a number of sources - CSV, Excel, Clipboard, Symphony chat, email etc.
A 'range' is a query created by the user (e.g. 'Trades Done Today', 'My activity', 'Latest Changes' etc) which can subsequently be exported, as often as required. This means our users don't need to filter the data in their grid each time they want to export it; they simply need to define a range once and the Adaptable Blotter will dynamically create the data set each time that range is exported.

The Regulatory Challenge

Regulation is going to be a critical challenge for some time to come. Our responsibility as UX designers is to build tools and components that contain functionality – like Audit Log – that will help our users to meet the regulatory challenge and to stay one step ahead.
GUI developers cannot resolve all compliance requirements themselves but, as AdaptableBlotter.JS shows, with some innovative thinking we can certainly do our bit to help. And given the urgency of MiFID2 that is certainly very welcome indeed.
