---
templateKey: blog-post
title: HTML5 Revolution
date: 2017-07-07T10:55:00.000Z
description: Adaptable Tools' CTO Jonny Wolfson considers the move to the web
featuredpost: true
featuredimage: /img/coffee-gear.png
---
The best revolutions are those that proceed quietly to make the world a better place, without disruption or violence along the way. The disadvantage of these kind of transformations is that they can go unnoticed, and those who prefer to stick in the past can more easily turn away from change.

There’s a movement of this kind now underway in the financial world, as the user interface shifts from the desktop to the browser, thanks to HTML5/JavaScript displacing traditional desktop technologies like WPF, WinForms, OpenGL and Flex.

Its progress has been tentative to date, largely because despite these advantages, until now HTML5 applications have lacked the capabilities and advanced features that desktop applications offer.  Without these, it’s a case of a better system for IT managers but misery for end users who endure inferior applications with reduced functionality.

Enter three musketeers to lead both IT teams and their users to a better place: Finsemble, a deceptively simple, but powerful, framework, built on state of the art technology provided by OpenFin, and containing AdaptableBlotter.JS a fast, data-agnostic HTML5 grid that ships with all the advanced features that super-users expect and demand

Multi-widget frameworks are a common feature on the financial desktop. With names like “Finance Dashboard”, ‘Trader Workstation’ or ‘Sales Console’, they host multiple different components communicating with each other and sharing data and events. They are typically built using technologies like WinForms CAB or WPF Prism.  

Browser limitations have previously made it impossible to deploy such frameworks on the web. Finsemble – developed by the ChartIQ team – changes all that. By leveraging the powerful OpenFin layer (which provides a host of features including security, interoperability, native windowing and much else), it enables multiple widgets to be hosted in a single application.

Finsemble provides the same windowing functionality offered by desktop equivalents, enabling users to size, stretch and position windows as required. And it uses the OpenFin APIs to facilitate interaction and message sharing between these separate components.

The Adaptable Tools team provided the blotters for an initial demo of the Finsemble framework and the results exceeded our expectations. In addition to offering its exceptional range of advanced searching, editing, sorting, filtering, auditing and grid management functions, AdaptableBlotter.JS was also able to communicate directly with other 3rd party components.

As highlighted in the video, we mocked up a typical trading application with trades, pricing and positions blotters and a ChartIQ chart widget. Using the OpenFin bus we created a service layer which ensures the positions blotter continually updates in real time as trades are added and edited in the trade blotter, and as prices tick and spreads are amended in the pricing blotter.

The blotters can share messages; for example, filtering on the instrument column in one blotter applies that filter to the other blotters. Neatly, messages can be shared with 3rd party components. So clicking the instrument in the trades blotter not only highlights that instrument in the other blotters but loads the associated graph in the chart window. And the communication works 2-ways, so selecting an instrument in ChartIQ updates the display in the blotters. 

Once pricing, aggregation, risk, RFQ and countless other components are added to the mix, the possibilities and potential for HTML5 financial applications get really exciting.

