# \<loading-page\>

this component shows a loading while a page is loading.

__Example__

```html
<loading-page></loading-page>
```

__Example paused__

```html
<loading-page paused></loading-page>
```

## Styling

The following custom properties and mixins are available for styling:

Custom property                    | Description                 | Default   |
-----------------------------------|-----------------------------|-----------|
--loading-page-bg-color            | background color for host   | #e5e5e5   |
--loading-page                     | empty mixin for host        | {}        |
--loading-page-loading             | empty mixin for loading     | {}        |
--loading-page-loader-border       | border for loader           | #f3f3f3   |
--loading-page-loader-border-top   | border top for loader       | #212121   |
--loading-page-loading-loader      | empty mixin for loader      | {}        |
--loading-page-loading-paused      | empty mixin for paused      | {}        |

## Serving your Application

You can serve your application with:

    $ gulp serve

## Building Your Application

The application goes building while you build your application, you can check your application in `dist` folder.
