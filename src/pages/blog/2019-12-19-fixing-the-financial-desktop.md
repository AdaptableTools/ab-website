---
templateKey: blog-post
title: Fixing the Financial Desktop
date: 2018-07-01T08:53:00.000Z
description: >-
  Adaptable Tools' CTO Jonny Wolfson thinks through the challenges of the
  Financial Services Desktop
featuredpost: true
featuredimage: /img/fixing-the-financial-desktop.png
tags:
  - gridgurus
---
I'm slow on the uptake.

Only after doing the same piece of work for the 6th time for a 6th Bank did I realise the current way we build DataGrids is costly, full of unnecessary duplication and is short-changing our users. And that there has to be a better alternative.

Building DataGrids

Every financial application - irrespective of its purpose, data or users' location - contains at least one DataGrid. It might be read-only or editable, have just a few rows or over a million, contain plain data or aggregated groups, be sourced from a Database or streamed externally, be called a Blotter, an Activity Sheet, a Pivot Table or any other name. But its essentially the same thing each time: rows and columns of important business-related data that users want to edit, search, filter, style, sort, export etc.

Building a DataGrid usually takes place right at the end of the system development process (when budgets are tight and deadlines are overdue) and contains 3 steps:

1.	Choose a "control" (alternatively known as a "component") from a vendor that you like - either open source or commercial.

2.	Populate that vendor control with your business data - from whichever source is appropriate - and add column formatting, cell editors etc. as required.

3.	Add the extra "bespoke functionality" that your users need to meet their business requirements, using the vendor's own API or UI. This usually takes around 200 developer days.

Duplication

But here's the thing: the result of that 200 days effort is pretty much the same irrespective of the data inside the grid. Most of the bespoke functionality that is added is identical each time: flashing cells, custom sorts, advanced searches, editing rules, reporting tools, layout management, column selectors etc.

It is this piece of work - step 3 above - that I did 6 times for the 6 different banks. True, each time it was a different asset class (credit, rates, equities etc.), a different vendor (DevExpress, Infragistics, Kendo, Xceed and others ) a different grid function (e.g. Sales, Trading, Activity, Reconciliation, Account Management) and a different part of the bank (Retail, Front Office, Back Office, Investment Bank). But the functionality was the same for every DataGrid that I built.

This duplication is not unusual. One Tier1 Investment Bank reported that in a single calendar year they counted 49 different teams across the globe each doing this same piece of work: adding bespoke functionality to a vendor grid control. Different regions, different vendors, different technologies, different asset classes, different everything - but the same functionality each time.

Lack of standardisation

To make matters worse, often separate teams are writing systems for the same desk and same users. So a trader, for example, will frequently end up with multiple DataGrids, that have near-identical functionally, but each of which look very different, work different, necessitate a different learning curve and require different support teams to manage.

And since each DataGrid is built by disparate teams using varying vendor components, there is no way for developers in the same company to re-use the code. Equally there is no way for end-users to share data or reports or searches or views or anything else between the grids. The reason being that each DataGrid's bespoke functionality is "tightly coupled" to the vendor control and to the business data it is managing.

A side effect of this is that it's almost impossible to move from using one vendor control to another without having to re-write almost everything from scratch - once you have chosen a vendor, you are locked-in for the lifetime of the application even it is unable to meet new requirements.

Missing Features

But that's not all. Because DataGrid's are built at the end of the development process, they are delivered as quickly as possible. Despite plenty of research showing they are the part of the application where users spend the most time, and on the basis of which they judge the overall effectiveness.

So this "bespoke functionality" is usually missing critical pieces, is insufficiently flexible (in my experience whichever end-user shouts the loudest influences what all users receive), rarely takes account of regulatory or compliance requirements, and is not 'future-proof' architected in such a way as to minimise system downtime or to facilitate adding new features.

And, lastly, the DataGrid is generally 'standalone' - meaning that its not fully integrated into the server or back-end systems, or able easily to flow data into Symphony, Bloomberg or other parts of the financial IT landscape.

Enter the Adaptable Blotter

So the current DataGrid development process is not fit for purpose. But can we do about it? Well at Adaptable Tools we believe we provide the answer: the Adaptable Blotter DataGrid add-on.

For those not yet familiar with it, a few of the many highlights of this market-leading tool are that it:

•	Is fully data-agnostic so can be installed in any application. Meaning you can replace the current multiplicity of different grids with a single downloadable UI that can be installed and supported identically across the whole organisation.

•	Integrates with all the leading vendor grid controls. No more vendor lock-in: you can share code and grid-created elements (like reports, searches and views) between users and between applications.

•	Is packed with the most comprehensive set of cutting-edge DataGrid features on the market. Including advanced features like 'Live Updates' which ensure that data exported to Symphony or Excel updates as the Blotter data changes.

•	Offers full audit and compliance as standard so the DataGrid becomes a key part of your regulatory toolkit.

•	Partners with iPushPull, OpenFin, Finsemble and other leading HTML5 FinTechs who are reshaping the financial desktop.

Summary

For too long financial users have had to put up with DataGrids that are costly to build, impossible to standardise and lack vital features. The Adaptable Blotter offers a single, elegant solution that saves money, standardises the desktop and puts the power back in the hands of users.If you want to be part of the Adaptable Blotter community, please drop us a line at sales@adaptabletools.com
