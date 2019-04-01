# Guide for Craft CMS 3

A CMS Guide for Craft CMS.

![Screenshot](resources/img/guide-cp.png)

Guide is made up of two parts:
- [The commercial plugin for Craft 3](https://github.com/wbrowar/craft-3-guide)
- [The open source user guide template](https://github.com/wbrowar/craft-guide-templates)

*Note: The license fee for this plugin is $39.00 via the [Craft Plugin Store](https://plugins.craftcms.com/guide).*

## Requirements

- This plugin requires Craft CMS 3.1.20.1 or later.
- A browser that support CSS Grid Layout and CSS Custom Properties.

## Installation

To install the plugin, you can find it in the Craft Plugin Store, or follow these instructions.

1. Open your terminal and go to your Craft project:

        cd /path/to/project

2. Then tell Composer to load the plugin:

        composer require wbrowar/guide

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Guide.

4. Use the following instructions to add guides to the Control Panel:
   - [Guide CP Section](https://github.com/wbrowar/craft-3-guide#guide-cp-section)
   - [Content Guides](https://github.com/wbrowar/craft-3-guide#content-guides)
   - [Guide Widget](https://github.com/wbrowar/craft-3-guide#guide-widget)
   
5. Checkout [Craft Guide Templates](https://github.com/wbrowar/craft-guide-templates) for ideas or to use a starter template to work from.

## Guide Overview

Craft CMS is intuitive. Marketing plans and organizational workflows—not so much. Guide lets you create a user manual within Craft CMS so clients don‘t need to go far to get the answers they need.

## Guide CP Section

![Screenshot](resources/img/guide-cp-custom.png)

### Guide Template

Use templates to create your CMS guide in a way that's easily portable from one site to another. Follow these instructions to create your guide within the Guide CP Section:

1. Create an index template in your site's `templates` directory. It can be named whatever you want, but the default is `_guide/index`. So if you create an `index.twig` file and place it in the `./templates/_guide/` directory, it will show up in the Guide CP Section. 
2. If you want to change your Guide index template's location, edit the path to your new location on the Guide plugin settings page.
3. You can create multiple pages and link to them through a navigation set in the Navigation tab in the Guide CP section.    
4. Edit your templates as needed. You can use these [style components](https://github.com/wbrowar/craft-3-guide#components) to change the layout.
5. If you have several sections of content on one page, add the `data-guide-section` attribute to any `h1, h2, h3`, or `h4` to add a drop down navigation that scrolls up and down the page to each section.
6. Most of Guide's CSS relies on Craft's default Control Panel CSS, but if you need to override styles or add your own CSS, use the [Custom CSS](https://github.com/wbrowar/craft-3-guide#css-variables) field in Guide's plugin settings.

#### Re-usable Guide Templates

Once you've written your first CMS guide, you can re-use the template files for another site—swapping out specific information using [Guide Variables](https://github.com/wbrowar/craft-3-guide#guide-variables)

You can also let your template generate the navigation by placing this code anywhere within your Home template. *NOTE: this code does not need to be located on any other template.*

    ```$twig
    {{ updateGuideCpNav({
        'Editing Content': '_guide/edit-entries',
        'Menus': '_guide/menus',
        'Forms': { admin: true, template: '_guide/forms' },
    }) }}
    ```

*NOTE: The Guide CP Nav gets created on the first time you load a template that contains the `updateGuideCpNav` Twig tag in it. You may then edit the navigation—or create it from scratch—on the Navigation CP page.*

### Guide CP User Guides

User Guides (Guides that are editable via the CMS) can be added to the Guide CP Section by clicking on the "+ New Guide" button. User Guides can be created in Markdown or Twig formats.

If you are using the Twig format, many of Craft's Twig extensions and tags will be available, but certain tags, such as `extend`, will not work.

You can also start from an existing Guide CP template by clicking on the "Convert to User Guide" button when you're on a page that loads a Guide CP template. This makes a copy of the template file's Twig code and stores it into the database as a User Guide.

### Twig Extensions

Guide comes with a few helper tags that make it easier to do template logic and to bring content into your Guide CP Section guides, Content Guides, and Guide Widgets.

| Variable Key | Description |
| --- | --- |
| `{{ guideAsset('FILENAME') }}` | Does a simple query for an image asset based on file name. |
| `{{ guideQuery(OBJECT) }}` | Find User Guides based on the given criteria. For example, `{{ guideQuery({ sectionId: 1, typeId: 1 }) }}` might return the Content Guide for the Homepage section. |
| `{{ guideVar('VAR_KEY') }}` | Pull in content set in Guide plugin settings, see [Guide Variables](https://github.com/wbrowar/craft-3-guide#guide-variables) for more information. |
| `{{ pluginEnabled('PLUGIN_HANDLE') }}` | A boolean that checks to see if a plugin is currently installed. |

### Guide Variables

Guide provides a set of variables that can be placed in your Twig templates to make it easy to swap out project-specific information.

To display a Guide Variable in your Twig templates, you can set the value of each variable in the Guide plugin settings page, then use the `{{ guideVar() }}` Twig extension to display that value in your page templates.

For example, if you enter "Acme Co." in the **Client Name** field, you could write this into your Guide template:

```twig
<h1>Hello, {{ guideVar("clientName") }}</h1>
```

And it would output this:

```html
<h1>Hello, Acme Co.</h1>
```

Guide templates are available in all of your Twig templates, so anywhere you can write Twig code, you can access the values of Guide Variables.

Here are all of the available Guide Variables;

| Variable Key | Type |
| --- | --- |
| `clientName` | string |
| `myCompanyName` | string |

## Content Guides

Say your client is already editing an entry and they want to look something up. Instead of sending them off to the Guide CP Section, you can leave instructions right on the Entry Edit page. Using action buttons in the sidebar—under Publish Options—you can create a Guide that appears on all Entry Edit pages of that entry type. The guide will appear in a modal—in front of the entry fields—so your content editor won't lose their place by loading a new page.

![Screenshot](resources/img/guide-content.png)

You can create the guide using Markdown, Twig, or by pointing to a template in your site's `templates` folder.

![Screenshot](resources/img/guide-content-edit.png)

Content Guides can be collaborative, too. By changing the "Who can edit guides?" field in Guide plugin settings, clients will be able to update existing guides and create their own guides. 

## Guide Widgets

![Screenshot](resources/img/guide-widgets.png)

### Welcome Widget

A welcome message can be a good starting point for your content editors. Let them know where to begin once they've logged into the CMS by creating a Guide Widget.

Users can add a Welcome Widget to their dashboard and see the same content as all other users who have added the Welcome Widget. Welcome Widget's content is created using the Welcome Widget link in the Guide CP Section.

![Screenshot](resources/img/guide-widget-welcome-widget-settings.png)

### Email Support

The Email Support widget lets your clients get in touch with you—or a dedicated support person set in Guide plugin settings—when they have an issue that isn‘t explained though Guide or Craft, itself.

The client may enter in a custom message and/or choose to send along basic system details that may help you diagnose their issues.

![Screenshot](resources/img/guide-email-support-email.png)

### Website Updates

Website Updates is a changelog for your website. Let clients and collaborators know what has changed as features are added to the website and to the CP.

Log entries can be added to Website Updates via the Website Updates link in the Guide CP Section. Here you can view all the past log entries, create a new log entry, and delete unwanted log entries.

![Screenshot](resources/img/guide-widget-website-updates-settings.png)

### Guide Widget

This can include just a simple note written in markdown or you can use dynamic content via Twig. You can create and customize as many Guide Widgets as you'd like. Each Guide Widget is specific to the user who's Dashboard it is crated on.

![Screenshot](resources/img/guide-widget-settings.png)

## Components

Components are slightly-styled, reusable snippets that can help you change the layout within Guide sections.

Here's a list of available components:

| Classes | Description |
| --- | --- |
| `.guide_button btn` | Style CP buttons with Guide's theme. |
| `.guide_code_block` | Call out code or other text in `div` or block element. |
| `.guide_code_inline` | Highlight code or other text. |
| `.guide_grid` | Grid only enables CSS Grid Layout on it's own. If you add a modifier, you can create multiple column layouts. |
| `.guide_grid .guide_grid--2_column` | Creates a 2-column grid. |
| `.guide_grid .guide_grid--3_column` | Creates a 3-column grid. |
| `.guide_grid .guide_grid--image` | Feature an image (or content) with a large area on the left and text on the right. |
| `.guide_grid .guide_grid--image--right` | The same as `.guide_grid--image` but switched, with the large area on the right. |
| `.guide_logo_lockup` | Use icons or logos to spruce up your headers. |

![Screenshot](resources/img/guide-components.png)

## CSS Variables

Guide is color neutral by default, but some simple CSS changes can help you rebrand Guide to your liking. To make it easier than hunting down CSS selectors, you can change [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) that drive Guide's theme.

![Screenshot](resources/img/guide-setting-colors-example.png)

For example, if you want to match Craft's sidebar, enter this into the Custom CSS field in Guide's plugin settings. Anywhere these properties are set they will be updated.

```css
:root {
  --guide-color-bg: rgb(51, 63, 77);
  --guide-color-link: rgb(255, 255, 255);
  --guide-color-text: rgb(187, 187, 187);
  --guide-color-h1: rgb(236, 236, 236);
}
```

Regular CSS can be used, as well. Custom CSS entered in Guide's plugin settings will appear on all pages within the CP.
 
*Another idea could be to re-brand Guide to your own company's brand colors.*

## Guide Roadmap

Some things to do, and ideas for potential features:

- Add a default template to Guide widgets for easy portability
- Expand Content Guides into Users and Categories
- A few more ideas are in the works

Brought to you by [Will Browar](https://twitter.com/wbrowar)
