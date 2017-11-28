# Flexbox Layout

The CSS3 Flexible Box, or flexbox, is a layout mode intended to accommodate different screen sizes and different display devices. For many applications, the flexible box model is easier than the block model since it does not use floats, nor do the flex container's margins collapse with the margins of its contents. ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes))

## How to use

There are 12 grid can be used to create the layout, simply refer the images below:

![alt text](https://github.com/maulanaahmadarif/flex-by-me/blob/master/dist/images/example3.png)

### Use .fx to auto layout

`.fx` class create layout base on the unused width

![alt text](https://github.com/maulanaahmadarif/flex-by-me/blob/master/dist/images/example1.png)

```html
<div class="row-fx">
    <div class="fx">
        .fx
    </div>
    <div class="fx">
        .fx
    </div>
</div>
```

![alt text ](https://github.com/maulanaahmadarif/flex-by-me/blob/master/dist/images/example2.png)

```html
<div class="row-fx">
    <div class="fx-2">
        .fx-2
    </div>
    <div class="fx">
        .fx
    </div>
    <div class="fx">
        .fx
    </div>
</div>


<div class="row-fx">
    <div class="fx-6">
        .fx-6
    </div>
    <div class="fx">
        .fx
    </div>
    <div class="fx">
        .fx
    </div>
</div>
```

### Adjust grid positioning

You can justify your layout, check the example below:

![alt text](https://github.com/maulanaahmadarif/flex-by-me/blob/master/dist/images/example4.png)

```html
<div class="row-fx justify-center">
    <div class="fx-6">
        .justify-center
    </div>
</div>
<div class="row-fx justify-end">
    <div class="fx-6">
        .justify-end
    </div>
</div>
<div class="row-fx justify-start">
    <div class="fx-6">
        .justify-start
    </div>
</div>
```

also align your layout:

![alt text](https://github.com/maulanaahmadarif/flex-by-me/blob/master/dist/images/example5.png)

```html
<div class="row-fx align-items-start">
    <div class="fx-6">
        .align-items-start
    </div>
    <div class="fx-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero laboriosam consequuntur, cum excepturi inventore illum enim quo laudantium rem. Amet nihil rerum, tempora illo est veniam odio exercitationem facere!
    </div>
</div>
<div class="row-fx align-items-center">
    <div class="fx-6">
        .align-items-center
    </div>
    <div class="fx-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero laboriosam consequuntur, cum excepturi inventore illum enim quo laudantium rem. Amet nihil rerum, tempora illo est veniam odio exercitationem facere!
    </div>
</div>
<div class="row-fx align-items-end">
    <div class="fx-6">
        .align-items-end
    </div>
    <div class="fx-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vero laboriosam consequuntur, cum excepturi inventore illum enim quo laudantium rem. Amet nihil rerum, tempora illo est veniam odio exercitationem facere!
    </div>
</div>
```