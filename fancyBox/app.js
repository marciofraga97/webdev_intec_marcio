// --> Imported files

// import { Fancybox } from "@fancyapps/ui";
// import "fancyapps/ui/dist/fancybox.css";

// --> If you wish to customize options, simply overwrite default click handler:

// Fancybox.bind("[data-fancybox]", {
//     // Your options go here
//   });

// --> It also can be launched via the constructor interface:

// const fancybox = new Fancybox([
//     {
//       src: "<p>Lorem ipsum dolor sit amet.</p>",
//       type: "html",
//     },
//   ]);

// --> With static method:

// const fancybox = Fancybox.show([
//     {
//       src: "https://lipsum.app/id/99/800x600",
//       type: "image",
//     },
//   ]);

// --> Instance methods (getInstance()):

/*
1. close([event: ClickEvent]): void
Start closing the current instance.

2. next(): void
Silde caousel to next page.

3. prev(): void
Slide carousel to pevious page.

4. jumpTo([args: any]): void
Slide carousel to selected page with optional parameters:
   --> Fancybox.getInstance().jumpTo(2);
   --> Fancybox.getInstance().jumpTo(3, { friction: 0 });

5. getSlide(): Object|null
Get the active slide. This will be the first slide fom the current page of the main carousel.

6. focus([event: FocusEvent]): void
Place focus on the first focusable element inside current slide.

7. hideScrollbar(): void#
Hide vertical page scrollbar and adjust body right padding value to prevent content from shifting
(otherwise the body element may become wider and the content may expand horizontally).

8. revealScrollbar(): void#
Stop hiding vertical page scrollbar.

9. clearContent(slide: Object): void#
Remove content for given slide.

10. setContent(slide: Object, html: HTMLElement|String[, options: Object]): void#
Set new content for given slide.

11. showLoading(slide: Object): void#
Create loading indicator inside given slide.

12. hideLoading(slide: Object): void#
Remove loading indicator from given slide.
*/

// Static Methods

/*
1. bind(selector: String[, options: Object]): void#
Attach a click handler function that starts Fancybox to the selected items, as well as to all future matching elements.

2. unbind(selector: String): void#
Remove the click handler that was attached with bind()

3. show(items: Object[, options: Object]): Fancybox#
Create new Fancybox instance with provided options.

4. getInstance([id: String|Numeric]): Fancybox|null#
Retrieve instance by identifier or the top most instance, if identifier is not provided.

5. close([all: Boolean]): void#
Close all or topmost currently active instance.

6. destroy(): void#
Immediately destroy all instances (without closing animation) and clean up all bindings.
*/

// Options: See more here: https://fancyapps.com/docs/ui/fancybox/options

// Events: https://fancyapps.com/docs/ui/fancybox/events

// Images: https://fancyapps.com/docs/ui/fancybox/plugins/image

// HTML & Video: https://fancyapps.com/docs/ui/fancybox/plugins/html


