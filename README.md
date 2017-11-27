# Flexbox Layout

The CSS3 Flexible Box, or flexbox, is a layout mode intended to accommodate different screen sizes and different display devices. For many applications, the flexible box model is easier than the block model since it does not use floats, nor do the flex container's margins collapse with the margins of its contents. ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes))

## How to use

There are 12 grid can be used to create the layout, simply refer the images below:

### Use .fx to auto layout

`.fx` class create layout base on the unused width

![alt text](https://github.com/maulanaahmadarif/flex-by-me/blob/master/dist/images/example1.png)

```html
<div class="row-fx">
    <div class="fx">
        <code>.fx</code>
    </div>
    <div class="fx">
        <code>.fx</code>
    </div>
</div>
```

![alt text ](https://github.com/maulanaahmadarif/flex-by-me/blob/master/dist/images/example2.png)

```html
<div>
    <div class="row-fx">
        <div class="fx-2">
            <code>.fx-2</div>
        </div>
        <div class="fx">
            <code>.fx</div>
        </div>
        <div class="fx">
            <code>.fx</div>
        </div>
    </div>
</div>

<div>
    <div class="row-fx">
        <div class="fx-6">
            <code>.fx-6</div>
        </div>
        <div class="fx">
            <code>.fx</div>
        </div>
        <div class="fx">
            <code>.fx</div>
        </div>
    </div>
</div>
```