# Guide for Craft CMS 3

Craft CMS is intuitive. Marketing plans and integrations aren&rsquo;t.

![Screenshot](resources/img/guide-cp.png)

## Requirements

- This plugin requires Craft CMS 3.0.0-RC1 or later.
- A browser that support CSS Grid Layout.

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

        cd /path/to/project

2. Then tell Composer to load the plugin:

        composer require wbrowar/guide

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Guide.

4. Use the following instructions to add components to the Control Panel:
   - Guide CP Section
   - Guide Widget

## Guide Overview

Guide helps you explain the rules of the road right where the rules need to be read. Create your CMS Guide within a section of the Control Panel and write your own Dashboard welcome widget.

There's more to come.

## Guide CP Section
Put your CMS Guide into the Control Panel.

![Screenshot](resources/img/guide-cp-custom.png)

### Guide Template

Use templates to create your CMS guide, in a way that's easily portable from one site to another. Follow these instructions to create your guide in the CP Section:

1. Create an Home template in your site's `templates` directory. It can be named whatever you want, but the default is `_guide/index`, so if you create an `index.twig` file at this path, `/templates/_guide/index.twig`, it will show up in the Guide CP Section. 
2. If you want to change your Guide Home template's location, edit the path to your new location on the Guide plugin settings page.
3. You can create multiple pages and link to them through a navigation set in your Guide Home template. Configure this code anywhere within your template.
    
    ```$twig
    {{ updateGuideCpNav({
        'Editing Content': '_guide/edit-entries',
        'Menus': '_guide/menus',
        'Forms': { admin: true, template: '_guide/forms' },
    }) }}
    ```
    
4. Edit your templates as needed. You can use these helper components to change the layout.

5. Most of Guide's CSS relies on Craft's CP default CSS, but if you need to override styles or add your own CSS, use the Custom CSS field in Guide's plugin settings.

*NOTE: Your templates will be pulled in like it would if it were using {% include %}, so your template will not extend other templates or use macros outside of the template.*

*The Guide CP Nav gets updated whenever the Guide Home template is loaded. To update Guide CP Nav, just click on the Guide tab in CP.*

## Guide Widget

A welcome message can be a good starting point for your clients. Let them know where to begin once they've logged into the CMS by creating a Guide Widget.

![Screenshot](resources/img/guide-widget.png)

This can include just a simple note, written in markdown, or add some dynamic content via Twig. You can create and customize as many Guide Widgets as you'd like.

![Screenshot](resources/img/guide-widget-settings.png)

## Components

Components are slightly-styled, reusable snippets that can help you change the layout within Guide notes and CP pages.

Here's a list of available components:

| Classes | Description |
| --- | --- |
| `.guide__code_block` | Call out code or other text in `div` or block element |
| `.guide__code_inline` | Highlight code or other text. |
| `.guide_grid` | Grid only enables CSS Grid Layout on it's own. If you add a modifier, you can create multiple column layouts. |
| `.guide_grid .guide_grid--2_column` | Creates a 2-column grid when the viewport is wider than 700px. |
| `.guide_grid .guide_grid--3_column` | Creates a 3-column grid when the viewport is wider than 700px. |

## CSS Variables

Guide is color neutral by default, but some simple CSS changes can help you rebrand Guide to your liking. To make it easier than writing multiple CSS selectors, you can change [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) that drive Guide's default theme.

![Screenshot](resources/img/guide-setting-colors-example.png)

For example, if you want to show your Craft CMS pride, enter this into the Custom CSS field in Guide's plugin settings. Anywhere these colors are set they will be updated.

```$css
:root {
  --guide-color-bg: rgb(51, 63, 77);
  --guide-color-link: rgb(13, 120, 242);
  --guide-color-text: rgb(187, 187, 187);
  --guide-color-h1: rgb(216, 216, 216);
}
```

![Screenshot](resources/img/guide-settings.png)

Another idea could be to rebrand Guide to your own company's brand colors.

## Guide Roadmap

Some things to do, and ideas for potential features:

- Create a plugin icon
- Expand theming css options
- Add sub-navigation to CP Section pages
- Add a default template to Guide widgets for easy portability
- Add the ability to create guide notes and pages within Craft CMS (stored in the DB)
- A few more things to come

Brought to you by [Will Browar](https://twitter.com/wbrowar)
