---
templateKey: blog-post
title: OpenFin And AdapTable Show Off Integration
date: 2021-06-02T13:27:05.293Z
description: >-
  Exciting webinar showing how leading innovators in the Financial Services
  management space, OpenFin and Adaptable Tools, are working together to deliver
  life changing enhancements to the data interface.  
featuredpost: true
featuredimage: /img/demo.png
tags:
  - fintech
  - openfin
  - webinar
---
From our early days we have looked for other innovators to work with.  We’re lucky to have found a number of them, and also to have found that working with others really can multiply and maximise the power each of us can offer solo.

That’s certainly been our experience of working with OpenFin, the leading financial desktop solution in 2021.  Collaborating with them at multiple levels of ongoing development has allowed us really to make the most of the tools each of us has, for the long-term benefit of users of both systems.

Together we built a small demo application to mimic a trading application.  It contained three main windows each of which contained an Adaptable instance: Trades, Prices and Positions.   The Trades grid updated a few seconds with a new, fictitious trade, and the Prices grid updated each second for with a new price for each of the 50 assets we displayed.

Both of these ticking data changes automatically updated the Positions grid which showed an overall ‘PnL’ view.  Each grid also had an associated audit window that showed a stream of changes – both ticking and user edits – that leveraged AdapTable’s in built audit log.  

Drawing on AdapTable’s strengths, each of the three views were pre-populated with lots of Predefined Config including:

* Layouts
* Format Columns
* Conditional Styles
* User Reports
* Action Columns
* Shortcuts

And then we looked to see how we could interweave OpenFin with AdapTable to do more.



## Communication

We leveraged the OpenFin FDC3 api to manage communication between the three AdapTable instances, so that selecting an instrument in any grid would filter all three views to that instrument.  And because it broadcast on the current channel, other applications running in Open – external to AdapTable – were able to listen and then filter their contents accordingly.  



In the same way, selecting an instrument in an external application updated the AdapTable instances.



## FDC3 Instruments

We also showed how the same functionality can be achieved using FDC3 messaging.  



Adaptable includes “Instrument Columns” – these are columns which are defined in the Finance Plugin as containing Instrument data.  These columns automatically provide a ‘Broadcast Instrument’ menu entry in the AdapTable Context Menu.   



We showed how clicking on that menu entry fires a Broadcast Instrument event which is picked up by Adaptable OpenFin plugin and sends it on as a full FDC3 message for other applications to deal with as required.



## Notifications

One of the most important aspects of any advanced application is to keep users informed of things that matter and changes that concern them.  



AdapTable has a very rich Alerting and Notification frameworks.  Users are able to create notifications in a wide variety of scenarios including when:

* Data Changes in the grid – either by user action or if ticking data
* A Validation Rule provided by the User has been triggered
* Data has changed (or not changed) in interesting ways over a given period of time - Observable Alerts
* A Data Change affects the sum of column values (e.g. limits) - Aggregation Alerts 



Alerts can be given ‘actions’ which will be performed when a Button in the Notification is clicked.  These include both those provided out of the box by AdapTable (like ‘Undo’, ‘Highlight Cell’ etc) and custom actions and buttons provided by the User.  



We showed how, when using AdapTable with OpenFin, all of these buttons – and associated actions – displayed as OpenFin notifications with actionable buttons.



## Excel

As anyone who has worked in finance will tell you, users LOVE Excel.  If given the chance, they will do everything in Excel, because it is easy to use and enriched with every feature anyone would ever want to use.  



But Excel comes at a price: it is not designed for collaboration, it is not auditable, and it does not contain validation.

Our webinar demonstrated how AdapTable’s integration with Excel fixes all 3 of these:

1. AdapTable provides powerful exporting functionality – allowing for custom user reports to be created using queries and then exported to multiple destinations either manually or via a schedule.  When running in OpenFin these reports, when exported to Excel, are ‘Live’.  This means that Excel will update automatically to show any changes made in the grid after the export has run.  
2. Similarly, any edits made in Excel are sent back to AdapTable which will update the grid and also send the details to Audit so a full record exists of who changed what and when.
3. And, best of all, validation can be sent to Excel.  So any business rules regarding legitimate data changes can be set in AdapTable and will include also edits made in Excel.  Which will then display as OpenFin notifications with actions.

In the webinar, we created a validation business rule to say that a certain column’s value could not move by more than 20%, and when that rule was broken by an Excel edit, the OpenFin Notification popped up together with an undo button allowing the user to revert the edit.



As these significant additions to functionality indicate, one plus one these days can equal four.  Both we and OpenFin, and our users, can see the benefits of aligning what we each specialise in.  And the result is a serious enrichment to what is possible in managing day to day in the financial world.



Take a look for yourself at how we worked together in the [webinar recording](https://www.youtube.com/watch?v=bQHVDyw2UZ8)
